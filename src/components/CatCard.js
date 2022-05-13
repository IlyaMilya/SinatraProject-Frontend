import React, {useState} from "react";

function CatCard ({element}) {

    const {fact, length} = element
    const [favs, setFavs] = useState(false)

    return(
        <li className="card">
            <div className="detaits">
                {favs ?(
                    <button className="emoji-button favorite active" onClick={() => {setFavs(!favs)}}>★</button>
                ) : (
                    <button className="emoji-button favorite" onClick={() => {setFavs(!favs)}}>☆</button>
                    )}  
                    <strong>{fact}</strong>
                    <span> · {length}</span>
            </div>
        </li>
    )
}


export default CatCard;