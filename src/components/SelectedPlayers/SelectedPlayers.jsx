import React from "react";
import SingleSelectedPlayer from "../SingleSelectedPlayer/SingleSelectedPlayer";

const SelectedPlayers = ({ selected, setSelected, coin, setCoin }) => {
    const handleDelete = (deletePlayer) => {
        // console.log(deletePlayer)

        const filteredPlayer = selected.filter((player) => deletePlayer.playerName != player.playerName);
        setSelected(filteredPlayer);
        setCoin(coin + deletePlayer.price);
    };
    // console.log(selected)
    return (
        <div className="grid gap-6">
            {selected.map((selectedPlayer) => (
                <SingleSelectedPlayer key={selectedPlayer.id} selectedPlayer={selectedPlayer} handleDelete={handleDelete}></SingleSelectedPlayer>
            ))}
        </div>
    );
};

export default SelectedPlayers;
