import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const api_key = process.env.REACT_APP_API_KEY;
  const getArticles = useCallback(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${props.catname}&apiKey=${api_key}&page=${page}`
      )
      .then((response) => {
        setArticles(response.data.articles);
      });
  }, [api_key, props.catname, page]);

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {articles.map((article) => {
              return (
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    {article.urlToImage === null ? (
                      <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1634693798046-b00e706c3076?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                        alt="blog"
                      />
                    ) : (
                      <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={article.urlToImage}
                        alt="blog"
                      />
                    )}

                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {props.catname ? props.catname.toUpperCase() : "ALL"}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {article.title}
                      </h1>
                      <p className="leading-relaxed mb-3 truncate">
                        {article.description}
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <a
                          href={article.url}
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center">
            {page === 1 ? (
              <></>
            ) : (
              <button
                className="mt-20 mr-20 bg-slate-800 text-lg p-2 text-white rounded-2xl"
                onClick={() => {
                  setPage(page - 1);
                  getArticles();
                  setArticles(articles);
                }}
              >
                Previous Page
              </button>
            )}

            {articles.length < 20 ? (
              <p className="mt-20 text-lg p-2 rounded-2xl">No More Pages</p>
            ) : (
              <button
                className="mt-20 bg-slate-800 text-lg p-2 text-white rounded-2xl"
                onClick={() => {
                  setPage(page + 1);
                  getArticles();
                  setArticles(articles);
                }}
              >
                Next Page
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
