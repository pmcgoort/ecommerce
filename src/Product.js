import './Product.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import Star from '@mui/icons-material/Star';
import EmptyStar from '@mui/icons-material/StarBorder';
import { useStateValue } from './StateProvider'
import { useHistory } from "react-router-dom";


function Product(props) {

    const [{user, cart }, dispatch] = useStateValue();
    const history = useHistory();

    const addToCart = () => {

      dispatch({
        type: "ADD_TO_CART",
        item: {
          id: props.id,
          title: props.title,
          image: props.image,
          price: props.price,
          rating: props.rating,
        }
      });
    };



    return (
      <div className="Product">
        <p className='productTitle'>{props.title}</p>
        <img className='productImage' src={props.image}/>
        <p className='productPrice'>${props.price}</p>
        <p className='productRating'>
        {
            [...Array(props.rating)].map((i) => <Star/>)
        }
        {
            [...Array(5 - props.rating)].map((i) => <EmptyStar/>)
        }
        </p>
        <Button className='addToCart' variant='contained' onClick={addToCart}>Add to cart</Button>

      </div>
  );
}


export default Product;
