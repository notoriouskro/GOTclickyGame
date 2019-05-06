import React from 'react';
import './Card.css';

const Card = (props) => {
        return(
            <>
                <div className="item">
                <img src={props.image} className="myImg rounded" alt={props.name} key={props.key} onClick={props.onClick} />
                </div>
            </>
            );
}

export default Card;