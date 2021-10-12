import React from 'react'
import { useState, useEffect } from 'react';
import RatingStars from './RatingStars';

const AnimePage = (props) => {
    const id = props.match.params.id;
    const [data, setData] = useState();

    useEffect(() => {
        fetch(`https://api.aniapi.com/v1/anime?anilist_id=${id}`)
            .then(res => res.json())
            .then(jsonRes => setData(jsonRes))
    }, []);
    // console.log(id);
    return (
        <div>
            {data && data.data.documents && data.data.documents.map((key,index)=>{
            return(
                    <div className="sub-anime-container">
                        <h1>{key.titles.en}</h1>
                        <div style={{display:"flex"}}>
                        <div>
                            <img className="cover_imageAnime" onClick={()=>props.history.push(`/animePage/${key.anilist_id}`)} src={key.cover_image} />
                        </div>
                        <div>
                            <div className="sub-anime">Genres - {key.genres.map((genre)=><span>{genre} </span>)}</div>
                            <div className="sub-anime">
                                {key.descriptions.en ? <p>Description - </p> : " "}{key.descriptions.en ? key.descriptions.en : " "}
                            </div>
                            <div className="sub-anime">Season Year - {key.season_year}</div>
                            <div className="sub-anime">{key.trailer_url ? <a href={key.trailer_url ? key.trailer_url : " "}>Watch Trailer</a> : " "}</div>
                            <div className="sub-anime">No. Of Episodes - {key.episodes_count}</div>
                            <div className="sub-anime">
                                <h3>Select Rating</h3>            
                                <RatingStars />
                            </div>
                        </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default AnimePage
