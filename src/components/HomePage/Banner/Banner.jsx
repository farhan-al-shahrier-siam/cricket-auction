import React from "react";
import BannerBG from "../../../assets/bg-shadow.png";
import BannerImg from "../../../assets/banner-main.png";

const Banner = () => {
    return (
        <div className="relative">
            <div className="bg-black max-w-330 mx-auto rounded-3xl mt-2">
                <img className="rounded-3xl" src={BannerBG} alt="" />
            </div>
            <div className="mx-auto">
                <div className="space-y-6 text-white absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center top">
                    <img className="mx-auto" src={BannerImg} alt="" />
                    <h1 className="font-bold text-4xl">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p>Beyond Boundaries Beyond Limits</p>
                    <button className="btn btn-warning ">Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
