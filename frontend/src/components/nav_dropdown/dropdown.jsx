import React from "react";
import { Link } from 'react-router-dom';

class Dropdown extends React.Component {
    constructor(props){
        super(props)
        this.state = { visible: false }
        this.drop = this.drop.bind(this)
        this.handleClick = this.handleClick.bind(this);
    }

    drop(e){
        this.setState({ visible: !this.state.visible })
    }

    handleClick(e) {
        this.props.logout();
        this.drop();
    };


    render(){
        return(
            <div className="dropdown">
                <button id="dropdown-toggle" onClick={this.drop} className="dropdown-link">MENU</button>
                <div className="dropdown-container">
                    <ul onClick={e => e.stopPropagation()} className={this.state.visible ? "show-dropdown" : "clear"}>
                        <Link className="dropdown-item" to="/">
                            <li className="profile-link">
                                Profile        
                            </li>
                         </Link>
                        <Link className="dropdown-item" to="/songs">
                            <li className="all-songs-link">
                                Feed
                            </li>
                        </Link>
                        <button className="dropdown-item" onClick={this.handleClick}>
                            <li className="logout-button">
                                Logout
                            </li>
                        </button>
                    </ul>
                </div>
            </div>
        )
    }
};

export default Dropdown;
