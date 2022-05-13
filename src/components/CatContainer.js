import React from "react";
import CatCard from './CatCard'

function catContainer ({data}) {
    return(
        <main>
            <ul className="cards">
                {
                    data.map((element) => {
                        return(
                            <CatCard element={element}/>
                        )
                    })
                }
            </ul>
        </main>
    )
}
export default catContainer;