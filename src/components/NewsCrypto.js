import React from "react";
import axios from "axios";
import Cryptos from "../containers/assets/images/multiCrypto.jpg"
import { useState, useEffect } from "react";

const NewsCrypto = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const date = new Date();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://finnhub.io/api/v1/news?category=crypto&minId=0&token=${process.env.REACT_APP_FINNHUB_TOKEN_CRYPTO}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>chargement</span>
  ) : (
    <>
      <section className="xl:w-full lg:h-[400px] h-[550px] sm:h-[560px] xm:h-[750px] md:h-[800px] overflow-y-hidden mt-20 rounded-lg border borderColor bg-white/30 max-2xl:mb-10 shadow-md mx-2">
        <div className="lg:flex">

          <div className="z-10 relative max-lg:backdrop-blur-3xl ">
            <h2 className="text-left mb-2 text-xl ml-1 z-20 relative">Cryptomonnaies</h2>
            <a href={data[0].url} rel="noreferrer" target="_blank" className="z-10 relative">
              <div className="mb-10 mx-auto z-10">
                <img className="object-contain rounded-lg lg:w-[900px]" src={data[0].image} alt="" />
                <p className="text-left text-xl z-10 relative">{data[0].headline}</p>
              </div>
            </a>
          </div>
          <div className="flex flex-col justify-evenly animate-yScroll ">
            {data.map((elem, index) => (
              <>
                <a key={index} href={elem.url} rel="noreferrer" target="_blank" className="z-0 relative">
                  <div className=" flex justify-between 2xl:flex-col-reverse z-0 relative">
                    <h3 className="text-left ml-6 font-semibold">
                      {elem.headline}
                    </h3>
                    <img
                      className="w-[150px] 3xl:w-[250px] object-contain 2xl:ml-6 rounded-md"
                      src={elem.image ? elem.image : Cryptos}
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-left ml-6 mb-10 text-slate-500">
                      {date.toLocaleDateString(elem.datetime)}
                    </p>
                  </div>
                </a>
              </>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default NewsCrypto;
