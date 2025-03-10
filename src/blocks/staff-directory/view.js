import { createRoot } from 'react-dom/client';
import BlockApp from "./react-app/BlockApp";

// Render your React component instead
const blocks = document.querySelectorAll('.wp-block-cc-staff-directory');

blocks.forEach(block => {
createRoot(block).render(<BlockApp />);
})

