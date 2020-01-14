import React from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';




    export const CardList = props => (
        <div className='card-list'>
            {props.students.map(students => (
        
                
                <Card key={students.id} students={students} />
                
            ) )}
        </div>
    );
    