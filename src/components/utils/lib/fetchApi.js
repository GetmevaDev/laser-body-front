export async function fetchAPI(path) {
  const { API_URL } = process.env;

  try {
    const response = await fetch(`http://localhost:1337/api/${path}`);

    const data = await response.json();

    return data;
  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
}
