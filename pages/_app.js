import '../assets/css/app.css' //global
import 'bootstrap/dist/css/bootstrap.min.css' //global
import '../assets/css/publications.css' // for publications.js
import '../assets/css/mbr-additional.css' // for browser.js


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}