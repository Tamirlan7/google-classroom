import React from "react";
import './App.css';
import routes from "./router/routes";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./hocs/Layout";
import { UseTypedSelector } from "./hooks/redux";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";


const App: React.FC = () => {

    return (
        <div className="app">
            <Layout>

            </Layout>
        </div>
    );
}

export default App;
