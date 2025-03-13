import React from "react";
import StarRating from "../../../components/StarRating";

export default function ReviewCard({link, title, rating, review, destroy}) {
	// TODO: add delete functionality
	function deleteReview(){
		if(confirm('You sure you want to delete "' + title + '"?')){
			destroy();
		}
	}

	return (
		<div className="review-card">
			<div className="review-title"><a href={link}></a> {title}</div>
			<div className="review-rating">{rating}</div>
			<StarRating rating={rating} readonly />
			<div className="review-content" dangerouslySetInnerHTML={{__html: review}}></div>
			<button className={"delete-button"} onClick={deleteReview}>Delete</button>
		</div>
	);
}
