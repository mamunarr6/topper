import React from 'react';


const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const student of cart) {
        total = total + student.amount;
    }

    return (
        // cart
        <div className="cart">
            <h1>Students add: {props.cart.length}</h1>
            <p><b>Total :</b> {total}</p>
            {
                cart.map(student => <h3 key={student.id}>{student.name}</h3>)
            }
        </div>
    );
};

export default Cart;