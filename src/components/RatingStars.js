import React, { useState } from 'react';
import Star from './Star';

const RatingStars = () => {
    const [gradeIndex, setGradeIndex] = useState(0);
    const GRADES = ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'];


    const ratingChanged = (rating) => {
        console.log(rating);
        setGradeIndex(rating);
    };

    return (
        <div>
            <h3>{ GRADES[gradeIndex-1] ? GRADES[gradeIndex-1] : ''}</h3>
            <div style={{marginTop:"-16px"}}>
                <Star ratingChanged={ratingChanged} gradeIndex={gradeIndex} />
            </div>
        </div>
    );
}

export default RatingStars;