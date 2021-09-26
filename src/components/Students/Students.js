import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Student from '../Student/Student';
import './Students.css';

const Students = () => {
    // change state
    const [students, setStudents] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./studentsdata.json')
            .then(res => res.json())
            .then(data => setStudents(data));
    }, [])
    //function for handle the cart
    const handleCart = student => {
        const newCart = [...cart, student];
        setCart(newCart);
    }
    return (
        <div className="students">
            {/* student container */}
            <div className="student-container">
                {
                    students.map(student => <Student
                        key={student.id}
                        student={student}
                        handleCart={() => handleCart(student)}
                    ></Student>)
                }
            </div>
            {/* cart container */}
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Students;