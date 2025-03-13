import React, {useState} from "react";

export default function searchListItem({post}){
console.log(post);
	return (
		<div className="card">
			<div className="card-header">
				<h2>{post.title.rendered}</h2>
			</div>

			<div className="card-body">
				<img src={post._embedded['wp:featuredmedia']['0'].source_url} alt={post.title} width="200px" height="170px" className="card-img" />
				<p>{post.project_description}</p>
			</div>

			<div className="card-body">
				<p>{post.technology_used}</p>
			</div>

			<div className="card-body">
				<p>{post.link}</p>
			</div>
		</div>
	)
}
