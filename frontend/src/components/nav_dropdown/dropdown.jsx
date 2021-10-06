import React from "react";
import { Link } from 'react-router-dom';

class Dropdown extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false
        };
        this.changeState = this.changeState.bind(this);
        this.closeDropdown = this.closeDropdown.bind(this);
        this.logout = this.logout.bind(this);
    }

    changeState() {
        let newState = !this.state.show;
        this.setState({ show: newState });
    };

    closeDropdown(e) {
        this.setState({ show: false });
    };

    logout() {
        this.props.logout();
    };

    render(){
        let cName = this.state.show ? "show-dropdown" : "clear";
        return(
            <div className="dropdown">

                <button id="dropdown-toggle" onClick={this.changeState} onBlur={this.closeDropdown} className="dropdown-container">Menu</button>
                    
                    <ul onClick={e => e.stopPropagation()} className={cName} >

                          
                            <Link className="dropdown-item" to="/" onMouseDown={(e) => e.preventDefault()} onClick={(e) => this.closeDropdown(e)}>
                                <li className="profile-link" >
                                        Profile
                                </li>
                            </Link>
                            <Link className="dropdown-item" to="/songs" onMouseDown={(e) => e.preventDefault()} onClick={(e) => this.closeDropdown(e)}>
                                <li className="all-songs-link">
                                                Feed
                                </li>
                            </Link>
                            <button className="dropdown-item" onMouseDown={(e) => e.preventDefault()} onClick={this.props.logout}>
                                Logout
                            </button>
                    </ul>
                
            </div>
        );
    };
};

export default Dropdown;
