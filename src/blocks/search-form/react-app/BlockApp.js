import React, {useEffect, useState} from "react";
import SearchList from "./SearchList"
import {TextControl} from "@wordpress/components";
import getProjects from "./api/project";

export default function BlockApp(props) {
	let [keyword, setKeyword] = useState('');
	let [projects, setProjects] = useState([]);
	let [filteredProjects, setFilteredProjects] = useState([]);

	useEffect(() => {
		console.log("loaded");
		fetch('/wp-json/wp/v2/project?_embed')
			.then(response => response.json())
			.then(data => {
				console.log("data", data);
				setProjects(data);
				setFilteredProjects(data);
			}).catch(error => console.log(error));
	}, []);

	function filterProjects(keyword) {
		const results = projects.filter(project => {
			return project.title.rendered.toLowerCase().includes(keyword.toLowerCase());
		});

		setKeyword(keyword);
		setFilteredProjects(results);
	}

	function sortProjects() {
		const option = sortOptions[sortOptionIndex];
		const sortedProjects = [...filteredProjects].sort((a, b) => {
			if (option === 'title') {
				return a.title.rendered.localeCompare(b.title.rendered);
			} else if (option === 'date') {
				return new Date(a.date) - new Date(b.date);
			} else if (option === 'author') {
				return a.author_name.localeCompare(b.author_name);
			}
			return 0;
		});
		setFilteredProjects(sortedProjects);

		// Update the sort option index to the next one
		setSortOptionIndex((sortOptionIndex + 1) % sortOptions.length);
	}

	return (
		<div>
			<div>
				<label>Filter:
					<input type="text"
						   value={keyword}
						   onChange={e => filterProjects(e.target.value)}
					/>
				</label>
				<TextControl
					label="Filter"
					value={keyword}
					onChange={keyword => filterProjects(keyword)}
				/>
				<button onClick={sortProjects}>Sort</button>
			</div>
			<SearchList posts={filteredProjects}/>
		</div>
	)
}
