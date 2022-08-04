import { createRoot } from 'react-dom/client';
import EntryComponent from './components/EntryComponent';

const root = createRoot(document.querySelector('#app'));

root.render(<EntryComponent title="Inspire your evening" />);
