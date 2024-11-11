import React, { useState, useEffect } from "react";
import NewsDashboard from "../components/NewsDashboard";
import LineChart from "../components/LineChart";
import TickersEtf from "../components/TickersEtf";
import { useNavigate } from "react-router-dom";
import Preferences from "../components/Preferences";
import CarouselEtf from "../components/CarouselEtf";
// import CardFavorite from "../components/CardFavorite";

const Dashboard = ({ token }) => {
  const [selectedSymbols, setSelectedSymbols] = useState([]);
  const [selectedTimeFilter, setSelectedTimeFilter] = useState("1week");
  const navigate = useNavigate();

  const [favoritesUpdated, setFavoritesUpdated] = useState(false);

  const updateFavorites = () => {
    setFavoritesUpdated(!favoritesUpdated);
  };

  useEffect(() => {
    // Utiliser useEffect pour surveiller les changements dans le token
    // Si le token est null (non connecté), rediriger vers la page de connexion
    if (!token) {
      navigate("/login"); 
    }
  }, [token, navigate]);

  const handleSymbolClick = (symbol) => {
    // Check if the symbol is already selected
    if (selectedSymbols.includes(symbol)) {
      // Symbol is selected, remove it from the list
      setSelectedSymbols((prevSymbols) =>
        prevSymbols.filter((s) => s !== symbol)
      );
    } else {
      // Symbol is not selected, add it to the list
      setSelectedSymbols((prevSymbols) => [...prevSymbols, symbol]);
    }
  };

  const handleTimeFilterChange = (filter) => {
    setSelectedTimeFilter(filter);
  };

  return (
    <>
      <div className="flex flex-col w-full mx-auto pt-44 xl:w-10/12 xl:mb-[200px] xl:h-[900px]">
      <CarouselEtf
        divParent={"-mt-10 2xl:w-full h-[150px] flex items-end overflow-x-hidden "}
        divText={"w-[300px] flex justify-evenly items-center"}
        divCard={
          "flex mx-2 sm:w-1/2 sm:h-1/4 w-3/12 md:h-1/3 2xl:my-8 my-3 p-2 text-sm border borderColor rounded-lg shadow-md bg-black/10 backdrop-blur-[1px] animate-scrollSpeed"
        }
        styleText={"w-[150px] font-semibold text-sm text-white"}
      />
        <div className="h-[900px] flex max-xl:flex-col mx-auto">
          <div className="flex flex-col">
            <div className="m-2 shadow-lg xl:h-[757px] sm:h-[200px] border borderColor rounded-lg overflow-y-scroll bg-black/10 backdrop-blur-[2px]">
              <TickersEtf
                onSymbolClick={handleSymbolClick}
                token={token}
                updateFavorites={updateFavorites}
              />
            </div>
          </div>

          <div className="flex xl:flex-col">
            <div className="w-full md:w-1/2 m-2 h-[300px] max-md:hidden xl:h-1/6 h-[200px] borderColor border xl:mx-2 overflow-y-scroll rounded-lg bgCard w-[300px] xl:w-fit">
              <NewsDashboard />
            </div>
            <div className="mx-auto w-[305px] sm:w-full md:w-1/2 xl:h-[600px] md:h-[300px] h-[200px] border borderColor xl:mx-2 max-xl:m-2 xl:w-auto rounded-lg z-10 bg-black/10 backdrop-blur-[3px] text-white">
              <LineChart
                selectedSymbols={selectedSymbols}
                filter={selectedTimeFilter}
              />
            </div>
          </div>

          <div className="xl:w-5/12 2xl:w-3/12 h-44 xl:h-[757px] m-2 border borderColor rounded-lg overflow-y-scroll bgCard">
          <Preferences
              favoritesUpdated={favoritesUpdated}
                onTimeFilterChange={handleTimeFilterChange}
                token={token}
              />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;