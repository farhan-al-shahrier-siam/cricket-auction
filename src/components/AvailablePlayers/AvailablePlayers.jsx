import React from "react";
import Card from "../Card/Card";

const AvailablePlayers = ({ players }) => {
    // console.log(players);
    return (
        <div className="grid grid-cols-3 gap-4">
            {players.map((player) => (
                <Card key={player.id} player={player}></Card>
            ))}
        </div>
    );
};

export default AvailablePlayers;
