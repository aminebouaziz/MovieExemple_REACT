import React from 'react'
import './MovieApp.css'
import Rating from './Rating';

const RatingFilter = ({onChange,count})=>(
    <div className="rating-filter">
    <span className="rating-filter-text">Minimum rating</span>
    <Rating
    count={count}
     onChangeRating={(newRating)=> {
       onChange(newRating)
       }
     }/>
  </div>
)
export default RatingFilter