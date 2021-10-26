import './Home.css';
import Header from './Header.js'
import Product from './Product.js'
import Selection from './Selection.js'
import Login from './Login.js'
import Cart from './Cart.js'
import Orders from './Orders'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as React from 'react';
import ipad from './Images/ipad.jpg'
import electronics from './Images/electronics.jpeg'
import clothing from './Images/Clothing.jpg'
import laptop from './Images/laptop.JPG'
import tv from './Images/tv.JPG'
import iphone from './Images/iphone.JPG'
import adidasShoe from './Images/adidasShoe.JPG'
import tshirt from './Images/tshirt.JPG'
import fleece from './Images/fleece.JPG'
import sweatshirt from './Images/sweatshirt.JPG'


function Home() {
    return (
      <div className="Home">

        <Router>
          <Switch>

            <Route path='/home'>
              <Header/>
              <Selection title='Electronics' image={electronics}/>
              <Selection title='Clothing' image={clothing}/>
            </Route>

            <Route path="/electronics">
              <Header/>
              <Product id={1} title='2021 Apple 11-inch iPad Pro' image={ipad} price={1000} rating={5}/>
              <Product id={2} title='HP Stream 11.6-inch HD Laptop' image={laptop} price={300} rating={3}/>
              <Product id={3} title='TCL 40-inch 1080p Smart Roku TV' image={tv} price={400} rating={4}/>
              <Product id={4} title='Apple iPhone 11' image={iphone} price={600} rating={5}/>
            </Route>

            <Route path="/clothing">
              <Header/>
              <Product id={5} title="Adidas Men's Grand Court Sneaker" image={adidasShoe} price={60} rating={4}/>
              <Product id={6} title="Gildan Men's Ultra Cotton T-Shirt" image={tshirt} price={10} rating={2}/>
              <Product id={7} title="Gildan Men's Fleece Zip Hooded" image={fleece} price={15} rating={4}/>
              <Product id={8} title="Hanes Men's EcoSmart Sweatshirt" image={sweatshirt} price={10} rating={3}/>
            </Route>

            <Route path='/login'>
              <Header/>
              <Login/>
            </Route>

            <Route path='/cart'>
              <Header/>
              <Cart/>
            </Route>

            <Route path='/orders'>
              <Header/>
              <Orders/>
            </Route>

          </Switch>
        </Router>
      </div>
  );
}

export default Home;
