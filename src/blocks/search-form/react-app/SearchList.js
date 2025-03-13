import React, {useState} from "react";
import SearchListItem from "./SearchListItem";
export default function searchList({posts}){

	return (
		<ul className="search-list">
			{posts.map(post => (
				<SearchListItem post={post} key={post.id} />
			))}
		</ul>
	)
}
