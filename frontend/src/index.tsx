import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import router from './router/routes';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}> 
            <RouterProvider router={router} />
            <App />
        </Provider>
    </React.StrictMode>
);
