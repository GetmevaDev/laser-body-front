import { About } from "@/components/screens";
import { fetchAPI } from "@/components/utils";

export default function AboutPage({ attributes }) {
  return <About data={attributes} />;
}

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("about-page?populate=deep");

  if (!attributes) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      attributes,
    },
    revalidate: 60, // In seconds
  };
}
