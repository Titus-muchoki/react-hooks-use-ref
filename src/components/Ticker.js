import React, { useEffect, useState } from "react";
import { makeRandomNumber } from "../utils";

function Ticker() {
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("black");

  useEffect(() => {
    if(price > prevPrice){
      setColor("green");
    }else if(price < prevPrice){
      setColor("red");
    }else{
      setColor("black");
    }
  },[price]);
  //   const id = setInterval(() => setPrice(makeRandomNumber), 1000);
  //   return function () {
  //     clearInterval(id);
  //   };
  // }, []);

  return (
    <div>
      <h1>TickerMaster</h1>
      <h2 style={{ color: color }}>Price: ${price}</h2>
    </div>
  );
}

export default Ticker;
