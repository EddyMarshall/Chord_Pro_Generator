import React from "react";
import { Link } from 'react-router-dom';

export const RepertoireItem = props => {

    return (
       <li className="repertoire-item">
            <Link to={`/songs/${props.song._id}`} className="repertoire-title">
                {props.song.title}
           </Link>
           <div className="repertoire-key">
                {`${props.song.key} Major`}
           </div>  
       </li>
    )
};

export default RepertoireItem;