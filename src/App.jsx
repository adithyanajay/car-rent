import React, { useState } from "react";
import Searchbar from "./Components/Searchbar";
import Pagenation from "./Components/Pagenation";
import Cards from "./Components/Cards";

function App() {
  const [cards, setCards] = useState([]);
  return (
    <div className="app bg-mainbg min-h-screen w-full pt-5 pb-5">
      <div className="container bg-mainbg m-auto w-fit  max-w-sm md:max-w-7xl min-h-screen px-3">
        <Searchbar />
        <Cards cards={cards} />
        <Pagenation setCards={setCards} />
      </div>
    </div>
  );
}

export default App;
