import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  defaultContent,
  updateContent,
} from "../Redux/feature/content/contentSlice";
import { left_icon, right_icon } from "../assets";
import SeeAll from "./SeeAll";

function Pagenation({ setCards }) {
  // This component contains all the footer elements : count, see all cars, pagenation
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.value);
  const [currentPage, setCurrentPage] = useState(1);
  const content = useSelector((state) => state.content);

//updating the data by checking the search state

  useEffect(() => {
    if (search == "") {
      dispatch(defaultContent());
    } else {
      dispatch(updateContent(search));
    }
    setCurrentPage(1);

  }, [useSelector((state) => state.search)]);

  
  
  
  // checking records and setting the cards which we want to display in the selected page
  useEffect(() => {
    if (content.empty) {
      setCards([{ error: "Search Not Found" }]);
    } else {
      setCards(records);
    }
  }, [currentPage, content]);

  //pagenation logic

 
  const maxContentPerPage = 6;
  const lastElementPerPage = currentPage * maxContentPerPage;
  const firstElementofPage = lastElementPerPage - maxContentPerPage;
  const records = content.data.slice(firstElementofPage, lastElementPerPage);
  const numberOfPages = Math.ceil(content.data.length / maxContentPerPage);
  const pages = [...Array(numberOfPages + 1).keys()].slice(1);

  //pagenation arrow functionality
  const leftArrowClick = () => {
    if (currentPage != 1 || currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const rightArrowClick = () => {
    if (currentPage != numberOfPages || currentPage < numberOfPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // if the number of pages is zero the pagenation will not be displayed
  if (numberOfPages == 0) {
    return null;
  } else {
    return (
      <div className="w-full bg-contentbg m-auto shadow-md rounded-2xl px-5 py-4 mt-6 md:flex justify-between items-center ">
        
        <div className="card-count">
          <p className="mb-3 md:m-0">
            {records.length} from {content.data.length}
          </p>
        </div>
        {
          //see all cars the page is not in default mode or when all cars are not displayed
          search==""?"":<SeeAll />
        }
        <div className="pagenation flex justify-center items-center gap-1 md:gap-3">
          <a
            href={`#page/${currentPage}`}
            className="left img-cont bg-white rounded-lg w-6 cursor-pointer hover:bg-gray-50 shadow-md"
            onClick={leftArrowClick}
          >
            <img src={left_icon} alt="" className="w-full" />
          </a>
          {pages.map((page, key) => {
            return (
              <a
                href={`#page/${currentPage}`}
                key={key}
                id={`${key + 1}`}
                className={`${
                  key + 1 == currentPage ? "bg-gray-300" : "bg-white"
                } left img-cont rounded-lg py-1 px-2 cursor-pointer hover:bg-gray-50 text-center shadow-md`}
                onClick={(e) => {
                  setCurrentPage(key + 1);
                }}
              >
                <h1 className="text-xs">{page}</h1>
              </a>
            );
          })}
          <a
            href={`#page/${currentPage}`}
            className="right img-cont bg-white rounded-lg w-6 cursor-pointer hover:bg-gray-50 shadow-md"
            onClick={rightArrowClick}
          >
            <img src={right_icon} alt="" />
          </a>
        </div>
      </div>
    );
  }
}

export default Pagenation;
