import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import './Student.css';

const Student = (props) => {
    const { name, amount, img, id, school, position } = props.student;
    return (
        // each student information
        <div className="student">
            <img className="image" src={img} alt="" />
            <p><b>Name: </b>{name}</p>
            <p><b>School: </b>{school}</p>
            <p><b>Id: </b>{id}</p>
            <p><b>Position: </b>{position}</p>
            <p><b>Amount: </b>${amount}</p>
            <button
                className="amount-button"
                onClick={props.handleCart}
            ><FontAwesomeIcon icon={faShoppingCart} /> Add amount</button><br />
        </div>
    );
};

export default Student;
