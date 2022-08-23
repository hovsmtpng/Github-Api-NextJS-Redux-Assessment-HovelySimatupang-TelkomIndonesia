import '../styles/globals.css'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux'
import { useStore } from '../redux/store/index';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)
  const router = useRouter();
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
