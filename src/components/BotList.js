  import React from 'react';
   
  const BotList = (props)=> {
    return (
    <>
    {props.bots.map((bots,index)=> (
    <div>

      <img src={bots. avatar_url} alt='bot'></img>
    </div>
    ))}
    
        </>
        );
    };
   
    export default BotList; 