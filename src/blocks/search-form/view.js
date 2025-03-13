import { createRoot } from "react-dom/client";
import BlockApp from "./react-app/BlockApp";

const blocks = document.querySelectorAll('.wp-block-cc-search-form');

blocks.forEach(block => {
	createRoot(block).render(<BlockApp />);

})


