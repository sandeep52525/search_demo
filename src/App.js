import React, { useEffect, useState } from "react";
import Suggestions from "./components/Suggestions/Suggestions";

import "./styles.css";

const App = () => {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [display, setDisplay] = useState("none");

  const searchProducts = async (product) => {
    const response = await fetch(
      `https://www.searchanise.com/getwidgets?api_key=1Q7P8A7s4h&q=${product}&maxResults=6&startIndex=0&items=true&pages=true&facets=false&categories=true&suggestions=true&vendors=false&tags=false&pageStartIndex=0&pagesMaxResults=1&categoryStartIndex=0&categoriesMaxResults=3&suggestionsMaxResults=4&vendorsMaxResults=3&tagsMaxResults=3&output=jsonp&callback`
    );
    const data = await response.json();

    setData(data);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleFocus = () => {
    display === "none" && setDisplay("flex");
    //searchProducts(keyword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchProducts(keyword);
  };

  useEffect(() => {
    searchProducts(keyword);
  }, [keyword]);
console.log(data);
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="search-container">
          <input
            type="text"
            name="q"
            placeholder="Type here to search"
            value={keyword}
            className="search"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={() => {
              display === "flex" && setDisplay("none");
            }}
          />
        </div>
      </form>
      <Suggestions
        disp={display}
        data={data}
        keyword={keyword}
        setKeyword={setKeyword}
      />
    </div>
  );
};

export default App;
