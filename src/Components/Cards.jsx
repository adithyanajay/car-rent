import React, { useEffect } from "react";
import Card from "./Card";
import SeeAll from "./SeeAll";

function Cards({ cards }) {
  //function for window to scroll on top when the cards are updated
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: "smooth" });
  },[cards])


  return (
    <div className={`w-fit m-auto mt-5 cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-7`}>
      {cards.map((card,key) => {
        return card.error ? (<div className="text-center md:w-screen max-w-3xl   h-28 col-span-full lg:max-w-6xl flex flex-col justify-center items-center" key={key}>
          {card.error}
          <SeeAll />
          </div>) : <Card data={card} key={card.id} />;
      })}
    </div>
  );
}

export default Cards;
