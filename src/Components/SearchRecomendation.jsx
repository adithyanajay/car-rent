import React, { useEffect, useState } from "react";

function SearchRecomendation({
  recomendationData,
  display,
  setDisplay,
  setInput,
  updateSearchState,
}) {
  useEffect(() => {
    if (recomendationData == "") {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  }, [recomendationData]);

  const onRecomendationClick = (e, data) => {

    setInput(data);
    updateSearchState(e, data);
  };
  return (
    <div
      className={`${
        display ? "block" : "hidden"
      } w-full relative bg-white top-3 left-0 rounded-2xl  p-5`}
      id="search-recos"
    >
      {recomendationData.slice(0, 5).map((data, key) => {
        return (
          <div
            key={key}
            className="w-full border-b border-gray-500 bg-white hover:bg-gray-100 pt-3 cursor-pointer"
            onClick={(e) => {
              onRecomendationClick(e, data);
            }}
            id="search-reco"
          >
            <h1 className="text-sm sm:text-base md:text-lg">{data}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default SearchRecomendation;
