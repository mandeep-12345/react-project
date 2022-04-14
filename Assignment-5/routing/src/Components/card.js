import React from 'react';
import './card.css';

export default function Card({ people }) {
    console.log(people);
    return people.map((person) => {
        return (
            <div className="card">
                <div className="info">
                    <div className="name">
                        {person.name}
                        <br />
                        {person.location}
                    </div>
                    <div className="dots">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpSpq_QjMB9EcToz2hZh3LTkJyBU2F05aSH6haVi1hDy_PGRI-tum31O9TRIVYPSvERgo&usqp=CAU" alt="nothing" />
                    </div>
                </div>

                <div className="image">
                    <img src={person.PostImage} alt="Not Found" />
                </div>

                <div className="details">
                    <div className="like">
                        <img src="https://cdn-icons-png.flaticon.com/128/833/833300.png" alt="" />
                    </div>
                    <div className="share">
                        <img src="https://cdn-icons-png.flaticon.com/128/2526/2526496.png" alt="" />
                    </div>
                    <div className="date">{person.date}</div>
                </div>

                <div className="likeCounts">
                    <p>{person.likes} likes</p>
                </div>

                <div className="description">
                    <p>{person.description}</p>
                </div>
            </div>
        );
    });
}  