import React, { useEffect, useState } from "react";
import axios from "axios";
import API_ENDPOINT from "../api/api-endpoint";

import NavBar from "./../components/NavBar";
import Footer from "./../components/Footer";
// import Articles from "../components/Articles";

const ArticlePage = () => {
  const [ articleCategory, setArticleCategory ] = useState([]);
  const headers = {
    'Access-Control-Allow-Origin': '*',
  }
  
  useEffect(() => {  
    try {
      const fetchArticleCategory = async () => {
        const response = await axios.get(API_ENDPOINT.ARTICLE_CATEGORY,
        { headers: headers});
        setArticleCategory(response.results);
      }
      fetchArticleCategory();
    } catch (error) {
      console.log('Error', error);
    }
  });
  return (
    <>
    <NavBar />
    <ul className="divide-y divide-gray-200">
      {articleCategory.map((article) => (
        <li key={article.key} className="py-4 flex">
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              {article.title}
            </p>
          </div>
        </li>
      ))}
    </ul>
    <Footer />
    </>
  );
};

export default ArticlePage;
