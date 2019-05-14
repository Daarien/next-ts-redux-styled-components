import { Provider } from "react-redux";
import App, { Container, NextAppContext } from "next/app";
import withRedux from "next-redux-wrapper";
import initStore, { TStore } from "store";
import { ThemeProvider } from "styled-components";
import { projectTheme } from "utils/theme";

import "bootstrap/dist/css/bootstrap.min.css";

interface IRootAppProps extends NextAppContext {
  store: TStore;
}

export default withRedux(initStore)(
  class MyApp extends App<IRootAppProps> {
    static async getInitialProps({ Component, ctx }: IRootAppProps) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Container>
          <Provider store={store}>
            <ThemeProvider theme={projectTheme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </Provider>
        </Container>
      );
    }
  }
);
