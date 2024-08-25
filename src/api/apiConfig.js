import axios from "axios";

export const fetchArticles = async (query, from, to) => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/everything`, {
      params: {
        q: query || "technology",
        from: from,
        to: to,
        sortBy: "popularity",
        apiKey: "a186b614ee60414cb13ee0ef58b88519",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};
