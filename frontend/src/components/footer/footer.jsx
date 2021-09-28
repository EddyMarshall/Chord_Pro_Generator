import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Footer extends React.Component {
   render() {
      return (
         <div className="footer">
            <div className="creator">
               <h1 className="name">Mike Schnall</h1>
               <div className="links">
                  <a href="https://www.linkedin.com/in/mike-mordechai-schnall/" target="_blank" id="linkedin"/>
                  <a href="https://github.com/mordes89" target="_blank" id="github"/>
               </div>
            </div>
            <div className="creator">
               <h1 className="name">Eddy Marshall</h1>
               <div className="links">
                  <a href="https://www.linkedin.com/in/eddy-marshall-092ba6b9/" target="_blank" id="linkedin"/>
                  <a href="https://github.com/EddyMarshall" target="_blank" id="github"/>
               </div>
            </div>
            <div className="creator">
               <h1 className="name">Evan Czako</h1>
               <div className="links">
                  <a href="https://www.linkedin.com/in/evan-czako/" target="_blank" id="linkedin"/>
                  <a href="https://github.com/EvanCzako" target="_blank" id="github"/>
               </div>
            </div>
            <div className="creator">
               <h1 className="name">Amin Babar</h1>
               <div className="links">
                  <a href="https://www.linkedin.com/in/arbabar" target="_blank" id="linkedin"/>
                  <a href="https://github.com/aminbabar" target="_blank" id="github"/>
               </div>
            </div>
         </div>
      )
   }
}

export default Footer;