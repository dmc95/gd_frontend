import NewsCompagny from "../components/NewsCompagny";
import Top from "../components/Top";
import NewsCrypto from "../components/NewsCrypto";
import CarouselEtf from "../components/CarouselEtf";
import { ToastContainer, toast, Bounce } from "react-toastify";
import React, { useEffect } from "react";

const Home = ({ showSuccessToast }) => {
  useEffect(() => {
    if (showSuccessToast) {
      toast.success('Votre compte a bien été supprimer', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",  
        transition: Bounce,
      });
      // setShowSuccessToast(false);
    }
  }, [showSuccessToast]);   
    
  return (
    <>
    {showSuccessToast && <ToastContainer/>}
    <section className="w-[310px] sm:w-full 2xl:w-5/6 xl:w-5/6 h-[2900px] xm:h-[2900px] md:h-[3100px] lg:h-[2800px] 2xl:h-[1850px] xl:h-[3000px] mx-auto z-0">
    <div>
    <CarouselEtf
        divParent={"mt-20 2xl:full h-[150px] flex items-end overflow-x-hidden"}
        divText={"w-[300px] flex justify-evenly items-center"}
        divCard={
          "flex mx-2 sm:w-1/2 sm:h-1/4 w-3/12 md:h-1/3 2xl:my-8 my-3 p-2 text-sm border borderColor rounded-lg shadow-md bg-black/10 backdrop-blur-[1px] animate-scrollSpeed"
        }
        styleText={"w-[150px] font-semibold text-sm text-white"}
      />
    </div>
      <div className="pt-[100px] flex-col flex 2xl:flex-row">
        <div className="2xl:flex 2xl:flex-col flex-row w-full 2xl:w-6/12">
          <NewsCompagny />
          <NewsCrypto />
        </div>
        <div className="2xl:w-6/12 flex justify-center">
          <Top />
        </div>
      </div>
      {/* <div className="w-full">
        <CarouselEtf
          divParent={"2xl:w-11/12 2xl:h-[700px] lg:h-[400px] h-[600px] flex items-end overflow-x-hidden"}
          divText={"w-[300px]"}
          divCard={
            " mx-2 sm:w-1/2 sm:h-1/4 w-3/12 md:h-1/3 2xl:my-8 my-3 p-2 text-lg border borderColor rounded-lg shadow-md backdrop-blur-sm bg-white/30 animate-scroll"
          }
          styleText={"w-[150px] font-semibold 2xl:text-3xl"}
          />
      </div> */}
    </section>
          </>
  );
};

export default Home;



