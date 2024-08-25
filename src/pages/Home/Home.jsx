import React, { useState, useEffect } from "react";
import Filters from "../../components/Filters/Filters";
import Header from "../../components/Header/Header";
import NewsFeed from "../../components/NewsFeed/NewsFeed";
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchArticles } from "../../api/apiConfig";
import Preferences from "../../components/Preferences/Preferences";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [sources, setSources] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [filter, setFilter] = useState({ source: "", date: "" });

  useEffect(() => {
    const query = "apple"; // Default query
    const from = "2024-08-23";
    const to = "2024-08-23";

    fetchArticles(query, from, to)
      .then((response) => {
        const fetchedArticles = response.articles || [];
        setArticles(fetchedArticles);
        setFilteredArticles(fetchedArticles);

        const uniqueSources = Array.from(
          new Set(fetchedArticles.map((article) => article.source.name))
        );
        setSources(uniqueSources);

        const uniqueAuthors = Array.from(
          new Set(fetchedArticles.map((article) => article.author))
        ).filter((author) => author);
        setAuthors(uniqueAuthors);
      })
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  const handleSearch = (query) => {
    fetchArticles(query)
      .then((response) => {
        const fetchedArticles = response.articles || [];
        setArticles(fetchedArticles);
        applyFilters(fetchedArticles, filter);
      })
      .catch((error) => console.error("Error fetching articles:", error));
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    applyFilters(articles, newFilter);
  };

  const handlePreferencesChange = (newPreferences) => {
    setFilter(newPreferences);
    applyFilters(articles, newPreferences);
  };

  const applyFilters = (articles, filter) => {
    let filtered = articles;

    if (filter.source) {
      filtered = filtered.filter(
        (article) => article.source.name === filter.source
      );
    }
    if (filter.date) {
      filtered = filtered.filter(
        (article) =>
          new Date(article.publishedAt).toISOString().split("T")[0] ===
          filter.date
      );
    }
    if (filter.author) {
      filtered = filtered.filter((article) => article.author === filter.author);
    }

    setFilteredArticles(filtered);
  };

  const resetPreferences = () => {
    setFilter({ source: "", author: "" });
    setFilteredArticles(articles);
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <SearchBar onSearch={handleSearch} />
        <Filters sources={sources} onApplyFilters={handleFilterChange} />
        <div className="personalized-block transition-all duration-300">
          <Preferences
            sources={sources}
            authors={authors}
            onApplyPreferences={handlePreferencesChange}
            onResetPreferences={resetPreferences}
          />
        </div>
        <NewsFeed articles={filteredArticles} />
      </div>
    </div>
  );
};

export default Home;
