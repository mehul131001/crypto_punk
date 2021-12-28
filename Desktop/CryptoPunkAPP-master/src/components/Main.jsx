import React, {useState, useEffect} from "react";

const Main = ({selectedPunk, punkListData}) => {
  const [activePunk, setActivePunk] = useState(punkListData[8]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [selectedPunk, punkListData]);

  return (
    <div className=" main pl-3 my-10 pb-3 text-white border-b border-slate-600 ">
      <div className="mainConten flow-root">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk w-64 h-60 rounded-2xl float-left mr-6"
              src={activePunk.image_original_url}
              // src= "https://ipfs.thirdweb.com/ipfs/bafybeiebg45fopzkslpidbtemvljldjqyzcpg34blvtre6fyp7lweyysr4"
              alt=""
            />
          </div>
        </div>
        <div className="punkDetails ">
            <div className="title text-slate-200 text-5xl font-semibold pb-10 text-transparent bg-clip-text bg-gradient-to-br from-green-300 via-blue-500 to-purple-600">
                {activePunk.name}
                <span className="itemNumber text-3xl font-medium text-slate-400 ml-2" >.#{activePunk.token_id}</span>
            </div>
            

            <div className="owner flex flex-row">
                <img
                    src = {activePunk.owner.profile_img_url}
                    className=" w-12 rounded-full"
                    alt=""
                />
                <div className="ownerNameAndHandle ml-4">
                    <div>{activePunk.owner.address}</div>
                    <div className="ownerHandle text-teal-500">@sudhanshushekhar</div>
                </div>
            </div>
        </div>
        {/* Social Media Icons */}
        <div className="Social Handles grid grid-cols-3 mt-32 mr-3 ml-48 float-right">
            
            <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" className=" w-12 px-2 " alt="" />
            <img src="https://cdn-icons.flaticon.com/png/512/3256/premium/3256013.png?token=exp=1640603682~hmac=301b8408dc4f0b1cae6d4a98584f01d4" className=" w-12 px-2 " alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/545/545805.png" className=" w-12 px-2" alt="" />
            
        </div>
      </div>
    </div>
  );
};

export default Main;
