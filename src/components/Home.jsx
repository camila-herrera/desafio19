import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import React from 'react';
import CardPizza from './CardPizza';
import pizzas from '../assets/js/pizzas'; 

function Home() {
  return (
    <div className='Home'>
      <Header />
      <div className="card-container">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            foto={pizza.img}
            titulo={pizza.name}
            ingredients={pizza.ingredients.join(', ')}
            valor={pizza.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
