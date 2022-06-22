import React from 'react'
import {Link,useNavigate} from 'react-router-dom';

const Favorite = ({UpdateWatchList,watchListData,AddtoFav}) => {
  return (
    <main className="Home">
      <h1>Favorite List</h1>
      <hr />
      {watchListData.map((item,index) => (
        <>
        <div className="row">
          <div className="column">
          <div className="card">
          <h3>{item.name}</h3>
          <p>{item.description}...</p>
          <p>Cast : {item.cast}</p>
          <p>{item.genre}</p>
          <p>{item.language}</p>
          <button type="Submit" onClick={()=>AddtoFav(item.id)}>Remove</button>
          </div>
          </div>
          </div>
        </>
      ))}
    </main>
  )
}

export default Favorite