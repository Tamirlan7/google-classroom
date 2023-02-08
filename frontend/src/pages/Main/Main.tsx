import React, { useState } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/auth/actions";
import './Main.css';


interface MainProps extends React.PropsWithChildren {
    logout: () => void
}

const Main: React.FC<MainProps> = ({ logout }) => {

    const [rooms, setRooms] = useState<any[]>([
        {courseName: '', section: '', graduatesLink: '', folderLink: ''}
    ]);

    function onSubmit(e: any) {
        e.preventDefault();
        logout();
    }

    return (
        <div className="main" onSubmit={(e) => onSubmit(e)}>
            <form>
                <button type="submit"> Logout </button>
            </form>
        </div>
    );
}

export default connect(null, { logout })(Main);
