import './Orders.css';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { useStateValue } from './StateProvider'
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import { db } from "./firebase";



function Orders() {

    const [{user, cart, orders}, dispatch] = useStateValue();
    const history = useHistory();

    useEffect(() => {

      if(user) {

        db
        .collection(user)
        .doc('numOrder')
        .get()
        .then(function(doc) {
          let numOrder = (doc.data())['numOrder']
          let ordersFromDB = []

          for(let i = 1; i <= numOrder; i++){
            db
            .collection(user)
            .doc(i.toString())
            .get()
            .then(function(doc){
              ordersFromDB.push((doc.data())['order'])
              dispatch({
                type: "SET_ORDERS",
                item: ordersFromDB
              })
            })
          }
        })

      }

    }, [user])


    return (

      <div className="Orders">
        {
          orders.map((order) => {
            let totalCost = 0

            for(let i = 0; i < order.length; i++){
              totalCost += parseInt(order[i].price)
            }

            return(
              <div>
                {

                  order.map((item) => {
                    return(
                      <div className='productInCart'>
                        <img className='cartProductImage' src={item.image}/>
                        <p className='cartProductTitle'>{item.title}</p>
                        <p className='cartProductPrice'>${item.price}</p>
                      </div>
                    )
                  })
                }
                <div id='cost'>
                  <p id='ordersTotalCost'>Total Cost: ${totalCost}</p>
                </div>
                <hr />
              </div>
              )
            })
          }
      </div>
  );
}


export default Orders;
