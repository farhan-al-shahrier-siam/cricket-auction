import React from "react";
import Card from "../Card/Card";

const AvailablePlayers = ({ players, setCoin, coin, selected, setSelected }) => {
    // console.log(players);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {players.map((player) => (
                <Card selected={selected} setSelected={setSelected} coin={coin} setCoin={setCoin} key={player.id} player={player}></Card>
            ))}
        </div>
    );
};

export default AvailablePlayers;
