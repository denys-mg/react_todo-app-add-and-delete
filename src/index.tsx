import { createRoot } from 'react-dom/client';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/index.scss';

import { App } from './App';
import { TodosContextProvider } from './contexts/TodosContext';
import { ErrorsContextProvider } from './contexts/ErrorsContext';

createRoot(document.getElementById('root') as HTMLDivElement)
  .render(
    <TodosContextProvider>
      <ErrorsContextProvider>
        <App />
      </ErrorsContextProvider>
    </TodosContextProvider>,
  );
