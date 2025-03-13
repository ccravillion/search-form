export default function getProjects(setProjects, setFilteredProjects){
	fetch('/wp-json/wp/v2/projects')
		.then(response => response.json())
		.then(data => {
			console.log("data", data);
			setProjects(data);
			setFilteredProjects(data);
		})
}

