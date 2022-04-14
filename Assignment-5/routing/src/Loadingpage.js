import React from 'react';
import { Link } from 'react-router-dom';

import './Loadingpage.css';

export default function Loadingpage() {
    return (
        <div>
            <div className="image">
                <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
                    alt="something" />
            </div>
            <div className="title">
                <div className="txtLand">
                    <p>10x Team 04</p>
                </div>
                <button><Link id="landBtn" className="lBtn" to="/Postview">
                    Enter
                </Link></button>

            </div>
        </div>
        
    );
} 