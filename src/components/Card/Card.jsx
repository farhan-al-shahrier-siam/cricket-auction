import React from 'react';
import { BiSolidFlag } from "react-icons/bi";
import { TbUserBolt } from "react-icons/tb";

const Card = ({player}) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img src={player.playerImage} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"> <TbUserBolt></TbUserBolt>{player.playerName}</h2>
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
                        <button className="btn">Choose Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;