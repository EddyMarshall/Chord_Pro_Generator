import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    render() {
        return (
            <div>
                <div className="centerer">
                    <div className="splash-about-section">
                        <p className="splash-paragraph">
                        Got writer's block? Feel like your songwriting has gotten stale?
                        Here's an app for you. Dynamically generate beautiful chord progressions 
                        at the touch of a button with Chord Pro Generator. Share your 
                        songs with friends, show your support with likes and follow 
                        the artists you love. 
                        </p>
                        <div className="centerer">
                            <Link className="like-unlike start-writing" to="/signup">Start writing!</Link>
                        </div>
                        
                    </div>
                </div>

                    <h1 id="login-logo"></h1>
            </div>
        )
    }
}

export default Splash