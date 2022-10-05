import React from 'react';
import { addToDb, deleteFromDb, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    // console.log(props.cosmetic);
    const { name, age, id } = props.cosmetic;

    const addToCart = (Id) => {
        addToDb(id);
        // localStorage.setItem(id, 2);
        console.log('already exist', id);
    }
    const removeFromCart = id => {
        removeFromDb(id);
    }
    const deleteFromCart = (id) => {
        deleteFromDb(id);
    }
    return (
        <div className='product'>
            <h2>Name:{name}</h2>
            <p>Age:{age}</p>
            <p><small>Id:{id}</small></p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
            <button onClick={() => deleteFromCart(id)}>Delete</button>
        </div>
    );
};

export default Cosmetic;