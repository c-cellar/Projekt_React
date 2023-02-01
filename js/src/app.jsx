import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Index from './Index';

const root = createRoot(document.querySelector('#app'));

root.render(
  <BrowserRouter>
    <Index title="Just Random" />
  </BrowserRouter>
);
