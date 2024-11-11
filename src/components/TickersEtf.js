import React, { useState, useEffect } from "react";
import axios from "axios";
import Spin from "./Spin";

const TickersEtf = ({ onSymbolClick, token, updateFavorites }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://gd-backend-ggq9.onrender.com/daily_trade_Etf`);
        setData(response.data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [data]);
  
  const handleAddTicker = async (ticker) => {
    try {
      await axios.post(
        `https://gd-backend-ggq9.onrender.com/users/add-to-favorites`,
        { token: token, ticker: ticker },
        { withCredentials: true }
      );
      setFavorites([...favorites, ticker]);
      updateFavorites()
    } catch (error) {
      console.log(error.message);
    }
  };


  return isLoading ? ( 
    <Spin />
  ) : (
    <div>
      {data.map((elem) => (
               <div className="flex w-[300px]" key={elem.id}>
               {favorites.includes(elem.symbol) ? (
                <>
                <button 
                className="w-8 h-8 border border-slate-200 m-1 disabled text-slate-200"
                >+</button>
                 <p
                   onClick={() => onSymbolClick(elem.symbol)}
                   className="cursor-pointer my-2 flex justify-around hover:underline"
                   >
                   {elem.security}
                   <span className="text-[10px] text-indigo-700"> {elem.symbol}</span>
                 </p>
                   </>
               ) : (
                 <div className="flex">
                   <button 
                     onClick={() => handleAddTicker(elem.symbol)}
                     className="w-8 h-8 border border-black m-1 hover:scale-110 duration-100"
                     disabled={favorites.includes(elem.symbol)} 
                   >+</button>
                   <p
                     onClick={() => onSymbolClick(elem.symbol)}
                     className="cursor-pointer my-2 flex justify-around hover:underline"
                   >
                     {elem.security}
                     <span className="text-[10px] text-indigo-700"> {elem.symbol}</span>
                   </p>
                 </div>
               )}
             </div>
           ))}
         </div>
     
  );
};

export default TickersEtf;
