import { GraphQLClient } from 'graphql-request'
import { GetServerSidePropsResult } from 'next'

export const gqlClient = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_URL, {
    headers: {
        Authorization: `Bearer ${process.env.NEXT_HYGRAPH_TOKEN}`,
        "Content-Type": "application/json",
    },
});

export async function getServerSideProps (query: any): Promise<GetServerSidePropsResult<any>> {
  const data = await gqlClient.request(query)
    console.log("GraphQL Endpoint:", process.env.NEXT_PUBLIC_HYGRAPH_URL);
  return { props: data }
}
