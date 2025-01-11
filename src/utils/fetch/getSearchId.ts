const getSearchId = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };
  try {
    const res = await fetch(`https://aviasales-test-api.kata.academy/search`, options);
    if (!res.ok) {
      throw new Error(`Could not get search id`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
export default getSearchId;
