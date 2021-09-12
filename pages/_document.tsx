import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class AppDocument extends Document<{ cookies: any }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, cookies: ctx.req?.headers?.cookie };
  }

  render() {
    return (
      <Html lang="en" data-theme="dark">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
