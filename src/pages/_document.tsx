/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-sync-scripts */
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html lang="zh-CN">
                <Head>
                    <link rel="icon" href="./logo.png" />
                    <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet"></link>
                    <script async defer data-website-id="762d5c0b-0d40-4afa-80fc-b8ea0c8dbb25" src="https://umm.learnder.org/script.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
