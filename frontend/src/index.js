import React from 'react'; // ✅ Add React import
import ReactDOM from 'react-dom/client'; // ✅ Correct ReactDOM import
import { Provider } from 'react-redux';
import store from './redux/Store';
import App from './App'; // ✅ Import App component
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);