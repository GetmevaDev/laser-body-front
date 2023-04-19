import { About } from "@/components/screens";
import { fetchAPI } from "@/components/utils";

export default function AboutPage({ attributes }) {
  return <About data={attributes} />;
}

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("about-page?populate=deep");

  return {
    props: {
      attributes,
    },
    revalidate: 10, // In seconds
  };
}
