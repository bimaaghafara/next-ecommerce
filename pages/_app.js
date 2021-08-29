import 'styles/globals.css';
import React from 'react';
import App from 'next/app';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'styles/theme';
import { Provider } from 'react-redux';
import { useStore } from 'src/redux/store';
import Cookies from 'js-cookie';
import Router from 'next/router';
import LinearProgress from 'src/components/linearProgress';
import { SnackbarProvider } from 'notistack';

function MyApp({ Component, pageProps = {} }) {
  const store = useStore(pageProps.initialReduxState);
  const [showLinearProgress, setShowLinearProgress] = React.useState(false);

  Router.onRouteChangeStart = () => {
    setShowLinearProgress(true)
  };
  
  Router.onRouteChangeComplete = () => {
    setShowLinearProgress(false)
  };

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Provider store={store}>
          {showLinearProgress && <LinearProgress />}
          <SnackbarProvider>
            <Component {...pageProps} />
          </SnackbarProvider>
        </Provider>
        </ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  const { ctx } = appContext;
  const { pathname } = ctx;
  if (typeof window !== 'undefined') {
    // console.log('client');
    const isLogin = Cookies.get('isLogin');
    if (!isLogin && (pathname != '/login')) {
      Router.push('/login')
    }
  } else {
    // console.log('server');
    let isLogin = ctx && ctx.req && ctx.req.cookies && ctx.req.cookies.isLogin;
    try {
      isLogin = JSON.parse(isLogin);
    } catch {
      isLogin = false;
    }
    if (!isLogin && (pathname != '/login')) {
      const { res } = ctx;
      res.writeHead(307, { Location: '/login' });
      res.end();
    }
  }

  return { ...appProps }
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
