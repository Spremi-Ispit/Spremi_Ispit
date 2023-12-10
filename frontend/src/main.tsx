import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App.jsx';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    // </React.StrictMode>,
  );
} else {
  console.error("Root element with id 'root' not found.");
}
