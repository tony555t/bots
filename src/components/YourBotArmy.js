import React from "react";
import BotCard from "./BotCard";



function YourBotArmy({collection,clickHandler,deleteHandler}){
    return(

        <div className="ui segment inverted blue bot-army">
        <div className="ui six column grid">
          {"CLICK ON A BOT TO ADD."}
          <div className="row bot-army-row">
            {collection.map((bot) => (
              <BotCard key={bot.id} bot={bot} clickHandler={clickHandler} deleteHandler={deleteHandler} />
            ))}
          </div>
        </div>
      </div>
    );
  } export default YourBotArmy;
  


 