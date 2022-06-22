import React from "react";
import { Link } from "react-router-dom";

const LanguageFilterHome = ({ data,AddtoFav }) => {
  return (
    <main className="Home">
      <h1>Movies List</h1>
      <hr />
      {data.map((item,index) => (
        <>
        <div className="row">
          <div className="column">
          <div className="card">
          <h3>{item.name}</h3>
          <p>{item.description.substr(0, 25)}...</p>
          <p>Cast : {item.cast}</p>
          <p>{item.genre}</p>
          <p>{item.language}</p>
          <button type="Submit" onClick={()=>AddtoFav(item.id)}>Add to Watch List</button>
          </div>
          </div>
          </div>
        </>
      ))}
    </main>
  );
};

export default LanguageFilterHome;
