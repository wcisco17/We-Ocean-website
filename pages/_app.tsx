import ApolloClient, { InMemoryCache } from 'apollo-boost';
import App, { Container } from 'next/app';
import fetch from 'node-fetch';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { theme, ThemeProvider } from '../assets/theme';
import { GlobalStyled } from '../assets/theme/index';

const client = new ApolloClient({
    uri: 'http://localhost:5555',
    headers: {
        // Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJUdW5ndGllZC1hcGlAZGV2Iiwicm9sZXMiOlsiYWRtaW4iXX0sImlhdCI6MTU2MjMwMDk2NywiZXhwIjoxNTYyOTA1NzY3fQ.FzS1HTeXclp8IiN_gPr1d3SAhmsyg4Mc1haNJl3WMs8"
    },
    cache: new InMemoryCache(),
    // @ts-ignore
    fetch
});

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
                    <ApolloProvider client={client}>
                        <ApolloHooksProvider client={client} >
                                <GlobalStyled />
                                <Component {...pageProps} />
                        </ApolloHooksProvider>
                    </ApolloProvider>
                </ThemeProvider>
            </Container>
        );
    }
}