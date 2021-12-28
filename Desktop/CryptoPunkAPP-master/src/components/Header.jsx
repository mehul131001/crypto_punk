import React from "react";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const serachIcon = <FontAwesomeIcon icon={faSearch} inverse />;
  // const hoverEffect= "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600";
  return (
    <div className="flex flex-row pt-1 pb-5 border-b border-slate-500">
      <img src={punkLogo} className=" w-20 md:w-24 lg:w-32 " alt="punk logo" />

      <div className=" bg-slate-800 my-auto ml-8 py-2 px-3 mr-2 rounded-full hover:cursor-pointer  ">{serachIcon}</div>
      <input type="text" className="items-center px-4 py-5 my-auto outline-none h-3.5 w-full shadow-md transition-all rounded-full focus:ring-2 focus:ring-gray-600 bg-slate-800  text-gray-200" placeholder="Search for items, collections...." />
      <div className="flex flex-row my-auto text-lg text-slate-300 ml-5 hover:cursor-pointer ">
        <a href="https://opensea.io/assets?search[toggles][0]=IS_NEW" className="px-2 text-transparent bg-clip-text font-light text-slate-300 hover:text-violet-400 hover:text-xl  transition-all">Drops</a>
        <a href="https://opensea.io/explore-collections" className="px-2 text-transparent bg-clip-text font-light text-slate-300 hover:text-violet-400 hover:text-xl transition-all">Marketplace</a>
        <a href="https://opensea.io/login?referrer=%2Fasset%2Fcreate" className="px-2 text-transparent bg-clip-text font-light text-slate-300 hover:text-violet-400 hover:text-xl  transition-all">Create</a>
      </div>
      <a href="https://opensea.io/login" className="my-auto"><button className=" text-black bg-gradient-to-r from-blue-400 to-emerald-400 h-fit mx-3 px-8 py-2 rounded-full hover:-translate-y-1 hover:shadow-inner hover:text-xl hover:font-thin transition-all ">GET'IN</button></a>
      
    </div>
  );
};

export default Header;
