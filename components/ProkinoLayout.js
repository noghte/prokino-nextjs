import Header from './Header';
import Footer from './Footer';

import Head from 'next/head'
const layoutStyle = {
  // margin: 20,
  // padding: 20,
  // border: '1px solid #DDD'
};

const Layout = props => (
  <div style={layoutStyle}>
     <Head>
      <title>ProKino - Protein Kinaese Ontology</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
      <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap.native@2.0.27/dist/bootstrap-native-v4.min.js"></script>
    </Head>

    <Header />
      {props.children}
    <Footer />
  </div>
);

export default Layout;