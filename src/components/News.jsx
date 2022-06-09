import axios from "axios";
import React, { useState, useEffect } from "react";

function News() {
  const [articles, setArticles] = useState([]);
  const getArticles = () => {
    const api_key = process.env.REACT_APP_API_KEY;
    const page = 1;
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&category=&apiKey=${api_key}&page=${page}`
      )
      .then((response) => {
        setArticles(response.data.articles);
      });
  };
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {articles.map((article) => {
              return (
                <div class="p-4 md:w-1/3">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={article.urlToImage}
                      alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        ALL
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        {article.title}
                      </h1>
                      <p class="leading-relaxed mb-3 truncate">
                        {article.description}
                      </p>
                      <div class="flex items-center flex-wrap ">
                        <a
                          href={article.url}
                          class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Learn More
                          <svg
                            class="w-4 h-4 ml-2"
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
        </div>
      </section>
    </>
  );
}

export default News;