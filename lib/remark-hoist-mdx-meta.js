const hoistMdxMeta = function () {
  function transformer(ast) {
    ast.children.push({
      type: 'export',
      value: `MDXContent.meta = typeof meta !== undefined ? meta : {}`,
      position: {},
    });
  }

  return transformer;
};

module.exports = hoistMdxMeta;
