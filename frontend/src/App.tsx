import React, { useState } from "react";
import './App.css';
import Layout from "./hocs/Layout";
import ModalWindow from "./UI/ModalWindow/ModalWindow";


const App: React.FC = () => {

    const [active, setActive] = useState<boolean>(false)

    return (
        <div className="app">
            <Layout>
                
            </Layout>
        </div>
    );
}

export default App;
