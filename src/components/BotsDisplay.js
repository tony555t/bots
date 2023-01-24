import React,{useState,useEffect} from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";


function  BotDisplay(){
    const [army, setArmy] = useState([]);
    const [bots, setBots] = useState([]);

}
function induct(bot) {
    if (army.includes(bot)) return;
    setArmy((army) => [...army, bot]);
}


function retire(bot) {
  setArmy((army) => army.filter((it) => it.id !== bot.id));
}
useEffect(() => {
  fetch("https://api.npoint.io/1d41121ce8149651da6d/bots")
    .then((res) => res.json())
    .then((data) => setBots(data));
}, []);

function handleDelete(bot) {
  fetch(`https://api.npoint.io/1d41121ce8149651da6d/bots${bot.id}`, {
    method: "DELETE",
  }).then(() => {
    setBots((bots) => bots.filter((it) => it.id !== bot.id));
    setArmy((army) => army.filter((it) => it.id !== bot.id));
  });
}

function deleteHandler() {}
return (
  <div>
    <YourBotArmy collection={army} clickHandler={retire} handleDelete={handleDelete} />
    <BotCollection collection={bots} clickHandler={induct} handleDelete={handleDelete} />
  </div>
);


export default BotsPage;

