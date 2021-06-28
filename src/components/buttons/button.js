import React from 'react'
import './TheButtons.css';
import { Link } from 'react-router-dom';
export default function TheButtons(props) {
    return (
        <Link to={props.linkP || "#"}>
            <div id="TheButton">
                <div className="theButtonInterFace">
                    <div className="theImgSection">
                    </div>
                    <div className="theTitleSection">
                        <h2>{props.title}</h2>
                    </div>
                </div>
            </div>
        </Link>
    );
}

/* colors for the TheButtons 1.for text: #042949; 2. for button body: #C2DDFF;   */