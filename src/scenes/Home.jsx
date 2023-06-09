import { useEffect } from "react";

export default function Home ({ shows, setShows }) {
    useEffect( ()=> {
        //https://tv-shows-api-bl.web.app/shows
        fetch('https://tv-shows-api-bl.web.app/shows')
        .then(resp => resp.json())
        .then(setShows)
        .catch(alert)
    }, []);

    console.log(shows)
    
    return (
        <div className="main-container">
        {!shows
            ? "Loading..."
            : shows.map(
                (show) => (
                    <div key={show.id} className="show-container">
                        <h2>{show.title}</h2>
                        <img src={show.poster} alt="" />                    
                        <p>Seasons: {show.seasons}</p>
                    </div>
                )
            )         
        }
        </div>
    )
}