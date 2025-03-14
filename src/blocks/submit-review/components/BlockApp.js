import React, {useEffect, useState} from "react";
import AddReviewForm from "./AddReviewForm";
import ReviewList from "./ReviewList";
import ReviewPagination from "./ReviewPagination";

export default function BlockApp() {
	const [reviews, setReviews] = useState([]);
	const [loggedIn, setLoggedIn] = useState(null);
	const [pagination, setPagination] = useState({});

	// run once when app is loaded
	useEffect(() => {
		// TODO: only do this once the API client is ready
		wp.api.loadPromise.done( function () {
			getReviews();
			getLoggedInUser();
		});

	}, []);

	function getReviews(page = 1) {
		// TODO: getReviews
		const reviewsCollection = new wp.api.collections.Review();
		reviewsCollection
			.fetch({data: { per_page: 3, page: page }}) // returns a jqXHR
			.done(data => {
				console.log(reviewsCollection);
				setReviews([...reviewsCollection.models]);
				setPagination({...reviewsCollection.state});
			});

	}

	function deleteReview(review){
		// TODO: deleteReview
		review.destroy()
			.done(data => { // <-- a backbone method for each model
				getReviews();
			})
	}

	function addReview(newReview) {
		// TODO: addReview
		const post = new wp.api.models.Review(newReview);
		post.save() // returns jqXHR
			.done(data => {
				getReviews();
			})
	}

	function getLoggedInUser() {
		let user = new wp.api.models.UsersMe();
		user.fetch()
			.done(data => {
				console.log('user', data);
				setLoggedIn(true);
			})
			.fail(() => {
				console.log('not logged in');
				setLoggedIn(false);
			});
	}

	return (
		<div>
			<h3>Latest Reviews</h3>
			<ReviewList reviews={reviews} deleteReview={deleteReview} />
			<ReviewPagination
				currentPage={pagination.currentPage}
				totalPages={pagination.totalPages}
				setPage={getReviews}
				/>
			<hr/>
			<h3>Submit a Review</h3>
			{/* TODO: only show form if the user is logged in */}

			{loggedIn === true && <AddReviewForm addReview={newReview => addReview(newReview)} />}
			{loggedIn === false && <div className="error-msg">You need to log in to submit a review</div>}
		</div>
	);
}

// languages/frameworks/tools used in this demo
// wordpress, php, js, html, css, sass, react, JSX, backbone.js (with underscore.js), jquery, docker, git, npm, webpack, REST APIs, ajax, json
// also: sql backend, custom post types, etc
// with deployment: phpMyAdmin, WP CLI, FTP,
