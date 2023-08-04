import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json"/>
          <link rel="apple-touch-icon" href="/test-icon.png"/>
          <link rel="theme-color" href="#fff"/>
      </Head>

        <body>
          <Main />
          <div id="audioportal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}