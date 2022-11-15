import './Rating.css'
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Rating (props){

   
    const rating = Math.round(props.children)
    const ratingArr = []


    for( let i = 0; i < 5 ; i++){
        if (i < rating){
            ratingArr.push(<i class="fa-solid fa-star"></i>)
        } else {
            ratingArr.push(<i className="fa-regular fa-star"></i>)
        }
    }

    return (
        <div>
            {rating < 0 || rating > 5 ? <h1>Rating is not in the parameters</h1> :  ratingArr }
           
            <br></br>
        </div>
    )
}


export default Rating; 