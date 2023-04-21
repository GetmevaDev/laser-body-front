export async function fetchAPI(path) {
  const { API_URL } = process.env;

  try {
    const response = await fetch(`https://laser-body.herokuapp.com/api${path}`);

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
