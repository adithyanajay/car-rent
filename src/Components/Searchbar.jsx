import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSearch } from "../Redux/feature/search/searchSlice";
import { Search_icon } from "../assets";
import SearchRecomendation from "./SearchRecomendation";
import { searchRecomendation } from "../Api/searchRecomendation";

function Searchbar() {
  const [input, setInput] = useState("");
  const [recomendationData, setRecomendationData] = useState([]);
  const [displaySearchRecomendation, setDisplaySearchRecomendation] =
    useState(false);
    // function to update the search recomendation according to the input user submits
  const updateInput = (input) => {
    setInput(input);
    if (input != "") {
      setRecomendationData(updateRecomendation(input));
    } else {
      setRecomendationData([]);
    }
  };

  const updateRecomendation = (input) => {
    return searchRecomendation.filter((data) => {
      return data
        .toLowerCase()
        .replace(/\s/g, "")
        .startsWith(input.toLowerCase().replace(/\s/g, ""));
    });
  };

  // function for displaying and hidding the search recomendation
  useEffect(() => {
    if (displaySearchRecomendation == true) {
      window.addEventListener("click", checkClickEvent);
    }
    return () => {
      window.removeEventListener("click", checkClickEvent);
    };
  }, [displaySearchRecomendation]);

  const checkClickEvent = (e) => {
    if (e.target.id != "search-recos") {
      if (displaySearchRecomendation == true) {
        setDisplaySearchRecomendation(false);
      }
    }
  };
  //function to update the search state
  const dispatch = useDispatch();
  const updateSearchState = (e, input) => {
    e.preventDefault();
    dispatch(
      updateSearch({
        value: input,
      })
    );
    setDisplaySearchRecomendation(false);
  };

  return (
    <div className="bg-contentbg relative w-full m-auto shadow-md max-h-20 rounded-2xl px-5 py-4 flex justify-center sm:justify-start">
      <form
        onSubmit={(e) => updateSearchState(e, input)}
        className="bg-white w-fit rounded-2xl p-1  max-w-lg"
      >
        <input
          type="text"
          value={input}
          placeholder="Search..."
          onChange={(e) => updateInput(e.target.value)}
          className="outline-none py-1 px-3 "
        />
        <button type="submit" className="p-2 pr-3">
          <div className="img-cont w-5">
            <img src={Search_icon} alt="" className="w-full" />
          </div>
        </button>
        <div className="searchRecomendations">
          <SearchRecomendation
            recomendationData={recomendationData}
            display={displaySearchRecomendation}
            setDisplay={setDisplaySearchRecomendation}
            setInput={setInput}
            updateSearchState={updateSearchState}
          />
        </div>
      </form>
    </div>
  );
}

export default Searchbar;
