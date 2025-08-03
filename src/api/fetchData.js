const fetchData = async () => {
  try {
    const res = await fetch('https://api.restful-api.dev/objects');
    const json = await res.json();
    const normalized = json.map(item => ({
      ...item,
      id: Number(item.id),
    }));
    return normalized.sort((a, b) => b.id - a.id);
  } catch (error) {
    console.error("Error fetching:", error);
    return [];
  }
};

export default fetchData;

