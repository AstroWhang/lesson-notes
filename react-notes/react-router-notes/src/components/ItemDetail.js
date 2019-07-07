import React, {useState, useEffect} from 'react';
import { config } from '../config';
import { Link } from 'react-router-dom';
import '../App.css';

function Item({ match }) {

  useEffect(() => {
    fetchItem();
    console.log(match)
  }, []);

  const [item, setItem] = useState({
    images: {}
  });

  const fetchItem = async () => {

    const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`, { 
    'headers': {
      'authorization': `${config.AUTH_TOKEN}`
    }
  });

  const item = await fetchItem.json();

  setItem(item.data.item)

  console.log(item.data);

  
  };

  return (
    <div>
      <h1>{item.name}</h1>
     <img src={item.images.icon} alt="" /> 
    </div>
  );

}

export default Item;