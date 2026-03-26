import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";

const SingleSelectedPlayer = ({ selectedPlayer }) => {
    // console.log(selectedPlayer);
    return (
        <div className="container mx-auto flex justify-between items-center border border-gray-300 p-6 rounded-2xl">
            <div className="flex gap-6 items-center">
                <img className="h-20 w-20 rounded-2xl" src={selectedPlayer.playerImage} alt="" />
                <div>
                    <h3 className="font-semibold text-2xl">{selectedPlayer.playerName}</h3>
                    <p className="text-gray-500">{selectedPlayer.battingStyle}</p>
                </div>
            </div>
            <div>
                <MdOutlineDeleteOutline className="text-3xl btn btn-ghost rounded-full" style={{ color: "red" }} />
            </div>
        </div>
    );
};

export default SingleSelectedPlayer;
