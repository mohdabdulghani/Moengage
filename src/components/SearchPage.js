import React, { useState, useEffect } from 'react'
import "../App.css";

const SearchPage = (props) => {
    const [genre, setGenre] = useState('');
    const [title, setTitle] = useState('');
    const [data, setData] = useState();

    useEffect(() => {
        fetch(`https://api.aniapi.com/v1/anime?${title ? "title=" : ""}${title}&${genre ? "genres=" : ""}${genre}`)
            .then(res => res.json())
            .then(jsonRes => setData(jsonRes))
    }, [genre,title]);

   // console.log(data.data.documents);
    return (
        <div className="searchContainer">
            <h1 className="loginHeading">Anime Agent</h1>
            <input className="input" placeholder="Enter Title" value={title} onChange={e=>{setTitle(e.target.value)}} />
            {/* <input className="input" placeholder="Enter Genre" value={genre} onChange={e=>{setGenre(e.target.value)}} /> */}
            {data && data.data.documents && data.data.documents.map((key,index)=>{
            return(
                    <div className="sub-search-container">
                        <div>
                            <img className="cover_image" onClick={()=>props.history.push(`/animePage/${key.anilist_id}`)} src={key.cover_image} />
                        </div>
                        <div>
                            <div className="sub"><h3>Title</h3>{key.titles.en}</div>
                            <div className="sub"><h3>Genres</h3>{key.genres}</div>
                            <div className="sub"><h3>{key.descriptions.en ? <p>Description - </p> : " "}</h3>{key.descriptions.en ? key.descriptions.en : " "}</div>
                            <div className="sub"><h3>Season Year</h3>{key.season_year}</div>
                            <div className="sub">{key.trailer_url ? <a target="__blank" href={key.trailer_url ? key.trailer_url : " "}>Watch Trailer</a> : " "}</div>
                            <div className="sub"><h3>No. Of Episodes : {key.episodes_count}</h3></div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default SearchPage
