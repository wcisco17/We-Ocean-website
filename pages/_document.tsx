import Document, { Head, Main, NextScript } from 'next/document';
import * as React from 'react';
import { ServerStyleSheet } from '../assets/theme';

export default class MyDocument extends Document {
    static async getInitialProps({ renderPage }: any) {
        const sheet = new ServerStyleSheet();

        const page = renderPage((App: any) => (props: any) => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return { ...page, styles: React.Children.toArray(styleTags) }
    }

    render() {
        return (
            <html>
                <Head>{this.props.styles}
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}