import React, { useState, useEffect } from "react";
import axios from "axios";
import Spin from "./Spin";
import ChartsEtf from "./ChartsEtf";
import arrowUp from "../containers/assets/images/arrow-up-right.png";
import arrowDown from "../containers/assets/images/arrow-down-right.png";


const Flop10Etf = () => {
  const [data, setData] = useState();
  const [dataFlop, setDataFlop] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  useEffect(() => {
    const fetchDataFlop = async () => {
      try {
        const response = await axios.get(
          "https://gd-backend-ggq9.onrender.com/daily_trade_flop"
        );
        setDataFlop(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDataFlop();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://gd-backend-ggq9.onrender.com/daily_trade/${selectedSymbol}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    if (selectedSymbol) {
      // Vérifie si selectedSymbol est défini
      fetchData(); // Appeler fetchData seulement si selectedSymbol est défini
    }
  }, [selectedSymbol]);

  const handleClick = (symbol) => {
    setSelectedSymbol(symbol);
  };

  return isLoading ? (
    <Spin />
  ) : (
    
    <div className="flex flex-col">
      <h2 className='flex justify-center text-[50px] mb-10'>Flop 10 ETF</h2>
      {data && selectedSymbol && (
        <ChartsEtf selectedSymbol={selectedSymbol} data={data} />
      )}
      <div className="flex justify-center">
        <div className="mt-20 xl:w-[600px] xl:h-[700px] flex flex-col xl:flex-wrap content-center">
          {dataFlop &&
            dataFlop.map((elem, key) => (
              <div
                onClick={() => handleClick(elem.symbol)}
                key={key}
                className="flex justify-evenly cursor-pointer mx-2 w-[320px] xl:w-11/12 xl:h-[100px] 2xl:my-8 my-3 p-2 text-lg border borderColor rounded-lg hover:translate-y-3 shadow-md backdrop-blur-sm bg-white/30"
              >
                <p className="w-[150px] font-semibold">{elem.security}</p>
                <div className="w-[300px] flex justify-between">
                  <p className="text-[#6764E9]">{elem.close_value.substring(0, 7)}</p>
                  <p
                    className={
                      elem.variations.substring(0, 5) < 0
                        ? "text-red-600"
                        : "text-green-600"
                    }
                  >
                    {elem.variations.substring(0, 5)}
                  </p>
                  <div>
                    <img
                      src={elem.variations < 0 ? arrowDown : arrowUp}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Flop10Etf;
