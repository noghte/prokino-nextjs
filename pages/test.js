import Layout from '../components/ProkinoLayout';
import fetch from 'node-fetch'

// import { useProtein } from '../services/proteins';
export default function Test({protein}) {
    return (
      <Layout>
          {protein.localName}
          </Layout>
    );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    const res = await fetch('http://gumbo.cs.uga.edu:8080/prokinosrv/rest/entity/prokino:Human_EGFR')
    const data = await res.json()
  
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            protein : data,
      },
    }
  }