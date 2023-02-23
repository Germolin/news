import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Search from "./Search";
import List from "./List";

function App() {
  const [news, setNews] = useState([]);
  const [searchText, setSearchText] = useState("colombia");

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=${searchText}&sortBy=popularity&apiKey=31e23c7ac66d44a6947734df93265a38`
      );
      const data = await res.json();
      console.log(data);
      setNews(data.articles);
    }
    getData();
  }, [searchText]);

  return (
    <div className="App">
      <Search value={searchText} handler={(t: any) => setSearchText(t)} />
      <List data={news} />
    </div>
  );
}

export default App;
