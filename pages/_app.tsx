import App, { Container } from 'next/app';
import * as React from 'react';
import { theme, ThemeProvider } from '../assets/theme';
import { GlobalStyled } from '../assets/theme/index';
import { GlobalStateProvider } from '../store';

export default class RootApp extends App<any> {
    static async getInitialProps({ Component, ctx }: any) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        };

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <ThemeProvider theme={theme}>
                    <GlobalStateProvider>
                        <GlobalStyled />
                        <Component {...pageProps} />
                    </GlobalStateProvider>
                </ThemeProvider>
            </Container>
        );
    }
}