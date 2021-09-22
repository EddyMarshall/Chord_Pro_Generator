import React from "react";
import { Link } from 'react-router-dom';

class Dropdown extends React.Component {
    constructor(props){
        super(props)
        this.state = { visible: false }

        this.drop = this.drop.bind(this)
    }

    drop(e){
        this.setState({ visible: !this.state.visible })
    }


    render(){
        debugger
        return(
                 <div className="dropdown">
                    <button id="dropdown-toggle" onClick={this.drop} onBlur={this.drop} className="dropdown-link">DROPDOWN</button>
                    <div className="dropdown-container">
                        <ul onClick={e => e.stopPropagation()} className={this.state.visible ? "show-dropdown" : "clear"}>
                            <li className="dropdown-item">
                                <Link className="profile-link" to="#">Profile</Link>
                            </li>
                            <li className="dropdown-item">
                                <button className="logout-button" 
                                onClick={() => this.props.logout(this.props.currentUser)}>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
        )
    }
}

export default Dropdown
