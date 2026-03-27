import React from "react";
import SingleSelectedPlayer from "../SingleSelectedPlayer/SingleSelectedPlayer";
import { toast } from "react-toastify";

const SelectedPlayers = ({ selected, setSelected, coin, setCoin }) => {
    const handleDelete = (deletePlayer) => {
        // console.log(deletePlayer)

        const filteredPlayer = selected.filter((player) => deletePlayer.playerName != player.playerName);
        setSelected(filteredPlayer);
        setCoin(coin + deletePlayer.price);
        toast.warning(`${deletePlayer.playerName} is deleted...`);
    };
    // console.log(selected)
    return (
        <div className="grid gap-6">
            {selected.length === 0 ? (
                <div className="space-y-3">
                    <h2 className="text-center font-bold text-2xl">No Players Selected Yet</h2>
                    <p className="text-center text-gray-500 text-sm">Go to Available Tab to select players</p>
                </div>
            ) : (
                selected.map((selectedPlayer) => <SingleSelectedPlayer key={selectedPlayer.id} selectedPlayer={selectedPlayer} handleDelete={handleDelete}></SingleSelectedPlayer>)
            )}
        </div>
    );
};

export default SelectedPlayers;
