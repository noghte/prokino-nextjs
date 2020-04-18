import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((r) => r.json());

export function useProtein() {
    const { data, mutate } = useSWR('/api/user', fetcher);
    const user = data && data.user;
  return [data, { error }];
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. 
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    const { data, error } = useSWR('http://gumbo.cs.uga.edu:8080/prokinosrv/rest/entity/prokino:Human_EGFR', fetcher);
    return {
      props: {
        data,
      },
    }
  }