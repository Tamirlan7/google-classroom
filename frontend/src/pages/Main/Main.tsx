import React, { useState } from "react";
import './Main.css';
import MainHeader from "./MainComponents/MainHeader/MainHeader";


const Main: React.FC = () => {

    const [rooms, setRooms] = useState<any[]>([
        {courseName: '', section: '', graduatesLink: '', folderLink: ''}
    ]);

    console.log('Main render')

    return (
        <>
            <MainHeader />
            <main className="main-main">

            </main>
        </>

    );
}

export default Main;
