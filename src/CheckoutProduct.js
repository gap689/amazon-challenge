import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';


function checkoutProduct({id, image, title, price, rating}) {
    //to pull information or change information with the dispatch
    const[{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET', //type of the action
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image}/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>🌟 </p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket} >Remove from basket</button>
            </div>
        </div>
    )
}

export default checkoutProduct
