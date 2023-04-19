import { Home } from "@/components/screens";
import { fetchAPI } from "@/components/utils";

export default function HomePage({ attributes }) {
  return <Home data={attributes} />;
}

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("homepage?populate=deep");

  return {
    props: {
      attributes,
    },
    revalidate: 10, // In seconds
  };
}
