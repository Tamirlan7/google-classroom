import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth/actions";
import './Main.css';


interface MainProps extends React.PropsWithChildren {
    logout: () => void
}

const Main: React.FC<MainProps> = ({ logout }) => {

    const [rooms, setRooms] = useState<any[]>([
        {courseName: '', section: '', graduatesLink: '', folderLink: ''}
    ]);

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        logout();
    }

    return (
        <div className="main">
            <form onSubmit={(e) => onSubmit(e)}>
                <button type="submit"> Logout </button>
            </form>
            <Link to={'/profile?cat=self-info'} type="button">Profile</Link>
        </div>
    );
}

export default connect(null, { logout })(Main);
