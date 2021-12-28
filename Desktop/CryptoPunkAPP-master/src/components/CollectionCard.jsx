import React from 'react';

import weth from '../assets/weth.png'

const CollectionCard = ( {id , name, traits, image} ) => {
    return (
        <div className='text-slate-200 CollectionCard w-72 h-4/5 mx-3 mt-3 mb-8 bg-zinc-800 rounded-2xl  shadow-md  shadow-black transition-all hover:cursor-pointer hover:shadow-teal-600 hover:shadow-lg' >
            <img src={image} className=' w-full h-2/3 rounded-t-2xl pb-4' alt="PUNK Image" />
            <div className="details px-3"></div>
            <div className="name px-3">
                <strong className='text-xl hover:text-violet-400 transition-all'>{name}</strong> <div className="id text-slate-400"> .#{id} </div>
            </div>
            <div className="priceContainer pb-6 pt-1 px-1">
                <img src= {weth} className='wethImage w-1/12 pl-2 inline-block' alt="" />
                <div className="price inline-block px-2">{traits[0]?.value}</div>
            </div>
        </div>
    );
};

export default CollectionCard;
