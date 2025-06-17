import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/Chronicle Display Roman.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          {/* Add preload links for all your font files */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;