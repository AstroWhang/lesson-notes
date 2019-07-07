import React, {useState, useEffect} from 'react';
import { config } from '../config';
import '../App.css';

function Shop() {

  // var https = require('https');

  // var options = {
  //   'method': 'GET',
  //   'hostname': 'fortnite-api.theapinetwork.com',
  //   'path': '/store/get',
  //   'headers': {
  //     'Authorization': `${config.AUTH_TOKEN}`
  //   }
  // };

  // var req = https.request(options, function (res) {
  //   var chunks = [];

  //   res.on("data", function (chunk) {
  //     chunks.push(chunk);
  //   });

  //   res.on("end", function (chunk) {
  //     var body = Buffer.concat(chunks);
  //     console.log(body.toString());
  //   });

  //   res.on("error", function (error) {
  //     console.error(error);
  //   });
  // });

  // req.end();

  useEffect(() => {
    
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(req);

    const items = await data.json();
    console.log(items);

    setItems(items);

  }

  return ( 
    <div className="shop">
      <h3>Shop Page</h3>
    </div>
  );
}

export default Shop;