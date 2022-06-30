import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps (
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      }
    } finally {
      sheet.seal()
    }
  }
  render () {
    const url = process.env.NEXT_PUBLIC_ROOT_URL
    const ogp = url + 'ogp.png'
    return (
      <Html lang='ja'>
        <Head>
          <meta name="twitter:site" content="" />
          <meta property="og:url" content={url} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="ja_JP" />
          <meta property="og:image" content={ogp} />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans&family=Noto+Sans+JP&family=Raleway&display=swap"
            rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
