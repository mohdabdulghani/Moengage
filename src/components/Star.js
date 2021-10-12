import React from 'react';
import ReactStars from "react-rating-stars-component";

const Star = (props) => {

    return (
        <ReactStars
            count={5}
            onChange={(value)=>props.ratingChanged(value)}
            size={35}
            value = {props.gradeIndex}
            activeColor="#ffd700"
    />
    );
}

export default Star;