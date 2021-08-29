const visit = require('unist-util-visit');

const hoistMdxMeta = function () {
  function transformer(ast) {
    let totalWordCount = 0;

    visit(ast, 'text', (node) => {
      totalWordCount += node.value.split(' ').length;
    });

    visit(ast, 'export', (node) => {
      if (node.value.startsWith('export const meta')) {
        const minutes = Math.ceil(totalWordCount / 200);
        node.value = node.value.replace(/};$/, `minutesToRead: ${minutes}};`);
      }
    });
  }

  return transformer;
};

module.exports = hoistMdxMeta;
