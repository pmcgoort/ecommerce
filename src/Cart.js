import './Cart.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import { useStateValue } from './StateProvider'
import { useHistory } from "react-router-dom";
import { db } from "./firebase";


function Cart() {

    const [{user, cart, orders }, dispatch] = useStateValue();
    const history = useHistory();


    function removeFromCart(id){
      console.log(orders)
      dispatch({
        type: "REMOVE_FROM_CART",
        item: id
      });
    };

    function addToOrders(){
      if(user) {

        db
        .collection(user)
        .doc('numOrder')
        .get()
        .then(function(doc) {
          let numOrder = (doc.data())['numOrder'] + 1

          db
          .collection(user)
          .doc('numOrder')
          .update({
            numOrder: numOrder
          })

          db
          .collection(user)
          .doc(numOrder.toString())
          .set({
            order: cart
          })
        })

      }

      dispatch({
        type: "ADD_TO_ORDERS"
      })

      history.push('/home');
    }

    let totalCost = 0

    for(let i = 0; i < cart.length; i++){
      totalCost += parseInt(cart[i].price)
    }



    return (

      <div className="Cart">
        {
          cart.map((item) => {
            return (
              <div className='productInCart'>
                <img className='cartProductImage' src={item.image}/>
                <p className='cartProductTitle'>{item.title}</p>
                <p className='cartProductPrice'>${item.price}</p>
                <Button className='removeFromCart' variant='contained' onClick={() => removeFromCart(item.id)}>Remove from cart</Button>
              </div>
            )
          })
        }
        <div id='checkOut'>
          <p id='totalCost'>Total Cost: ${totalCost}</p>
          <Button className='purchase' variant='contained' onClick={addToOrders}>Order</Button>
        </div>
      </div>
  );
}


export default Cart;
