import React, { useState } from "react";
import { BiSolidFlag } from "react-icons/bi";
import { TbUserBolt } from "react-icons/tb";

const Card = ({ player, setCoin, coin, selected, setSelected }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleChosePlayer = () => {
        const tempCoin = coin - player.price;

        if (tempCoin >= 0) {
            setIsSelected(true);
            setCoin(coin - player.price);
            alert(`${player.playerName} is selected`);
            setSelected([...selected, player])
        } else {
            alert(`Not enough balance...`);
        }
    };

    return (
        <div className="">
            <div className="card bg-base-100 shadow-sm h-full">
                <figure>
                    <img src={player.playerImage} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {" "}
                        <TbUserBolt></TbUserBolt>
                        {player.playerName}
                    </h2>
                    <div className="flex justify-between items-center">
                        <div className="flex justify-between gap-2 items-center">
                            <BiSolidFlag></BiSolidFlag>
                            <p>{player.country}</p>
                        </div>
                        <button className="btn btn-ghost">{player.playerType}</button>
                    </div>

                    <div className="divider"></div>

                    <h2 className="font-bold">Ratting</h2>
                    <div className="flex justify-between gap-4 font-bold">
                        <p>{player.battingStyle}</p>
                        <p>{player.bowlingStyle}</p>
                    </div>

                    <div className="card-actions justify-between items-center">
                        <p className="font-semibold">Price: ${player.price}</p>
                        <button disabled={isSelected ? true : false} onClick={handleChosePlayer} className="btn">
                            {isSelected ? "Selected" : "Choose Player"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
