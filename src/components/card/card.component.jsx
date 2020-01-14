import React from 'react';

import './card.styles.css';



    export const Card = props => (
        <div className='card-container'>
            <img alt="students" src={'https://robohash.org/${props.students.id}?set=set2&size=180x180'}/>
            <h2>{props.students.name}</h2>
            <p>{props.students.name}</p>
            <p>{props.students.email}</p>
        </div>
    );

    export default Card;