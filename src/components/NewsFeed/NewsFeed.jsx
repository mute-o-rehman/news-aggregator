import React from "react";

const NewsFeed = ({ articles }) => {
  return (
    <div className="container mx-auto px-4">
      {articles.length === 0 ? (
        <p className="text-center text-gray-500">No articles found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}
              <h2 className="text-lg font-bold mb-2">{article.title}</h2>
              <p className="text-gray-700">{article.description}</p>
              <a
                href={article.url}
                className="text-blue-500 hover:underline mt-4 block"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsFeed;
