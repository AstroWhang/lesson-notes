import React, {useState, useEffect} from 'react';
import { config } from '../config';
import { Link } from 'react-router-dom';
import '../App.css';

function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {

    const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get', {
      'headers': {
        'authorization': `${config.AUTH_TOKEN}`
      }
    });

    const items = await data.json();
    console.log(items.data)
    setItems(items.data);
  };

  return ( 
    <div>
      <h3>Shop Page</h3>
      {items.map(item => (
        <h6 key={item.itemId}>
          <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
        </h6>
      ))}
    </div>
  );
}

export default Shop;