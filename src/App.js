import React,{useEffect, useState} from "react";
import BotList from "./components/BotList";
import './App.css';






const App=()=>{
  const [bots,setBots]=useState([]);  
   
  const getBotsRequest = async() =>{
    const url ='http://localhost:8001/bots';


    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setBots(responseJson.search);
  };
  

  useEffect(() => {
    getBotsRequest();
  },[]);
		
	
 

  return(
  <div className="container-fluid bot-app">
    <div className="row">

    <BotList bots={bots}/>
    </div>

      
  </div>
  );
};





export default App;
