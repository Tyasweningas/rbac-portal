const fetchData = async () => {
  try {
    const res = await fetch('https://api.restful-api.dev/objects');
    const json = await res.json();
    return json || [];
  } catch (error) {
    console.error("Error fetching:", error);
    return [];
  }
};

export default fetchData;
