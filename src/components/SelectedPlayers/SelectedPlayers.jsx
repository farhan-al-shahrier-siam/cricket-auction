import React from "react";
import SingleSelectedPlayer from "../SingleSelectedPlayer/SingleSelectedPlayer";

const SelectedPlayers = ({ selected }) => {
    // console.log(selected)
    return (
        <div className="grid gap-6">
            {
                selected.map(selectedPlayer => <SingleSelectedPlayer key={selectedPlayer.id} selectedPlayer={selectedPlayer} ></SingleSelectedPlayer>)
            }
        </div>
    );
};

export default SelectedPlayers;
