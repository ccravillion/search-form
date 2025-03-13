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
			</div>
			<SearchList posts={filteredProjects}/>
		</div>
	)
}
