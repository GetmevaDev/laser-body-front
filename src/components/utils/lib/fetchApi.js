export async function fetchAPI(path) {
  const { API_URL } = process.env;

  const response = await fetch(`https://laser-body.herokuapp.com/api/${path}`, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data from Strapi: ${response.status}`);
  }

  const data = await response.json();

  return data;
}
