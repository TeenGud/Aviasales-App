const searchTickets = async (searchId) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };
  try {
    const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`, options);
    if (!res.ok) {
      throw new Error(`Could not search tickets`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
export default searchTickets;
