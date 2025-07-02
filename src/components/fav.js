import React, { useRef } from "react";
import rv from "./rv.jpeg";
import cl from "./cl.jpeg";
import st from "./st.jpeg";
import vanilla from "./vanilla.jpeg";
import ch from "./ch.jpeg";
import '../App.css';

function FavoriteRecipes() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    let dist = dir === 'left' ? -320 : 320;
    scrollRef.current.scrollBy({
      left: dist,
      behavior: 'smooth'
    });
  };

  const dessertList = [
    {
      name: "Red Velvet Cake",
      img: rv,
      url: "https://www.google.com/search?q=red+velvet+cake+recipe"
    },
    {
      name: "Choco Lava Cake",
      img: cl,
      url: "https://www.google.com/search?q=choco+lava+cake+recipe"
    },
    {
      name: "Strawberry Tart",
      img: st,
      url: "https://www.google.com/search?q=strawberry+tart+recipe"
    },
    {
      name: "Vanilla Cake",
      img: vanilla,
      url: "https://www.google.com/search?q=vanilla+cake+recipe"
    },
    {
      name: "Chocolate Cake",
      img: ch,
      url: "https://www.google.com/search?q=chocolate+cake+recipe"
    }
  ];

  return (
    <div className="favorites-section">
      <h2>˙⋆✮ Featured Desserts of the Week 𝜗𝜚⋆₊˚</h2>
      <div className="scroll-wrapper">
        <button className="arrow left" onClick={() => scroll("left")}>←</button>
        <div className="scroll-container" ref={scrollRef}>
          {dessertList.map((item, idx) => {
            return (
              <div key={idx} className="recipe-card">
                <a href={item.url} target="_blank" rel="noreferrer">
                  <img src={item.img} alt={item.name} />
                </a>
                <h4>{item.name}</h4>
              </div>
            );
          })}
        </div>
        <button className="arrow right" onClick={() => scroll("right")}>→</button>
      </div>
    </div>
  );
}

export default FavoriteRecipes;
