import React,{useState,useEffect} from "react";
import BotList from "../components/BotList";





const App=()=>{
  const [bots,setBots]=useState([]);  
  const getBotsRequest =async ()=>{
    const url ='https://robohash.org/sedofficiadeserunt.png?size=300x300&set=set1';

    const response = await fetch(url);
    const responseJson=await response.json();

    console.log(response.json);
    setBots(responseJson.search);
  };
  useEffect(() => {
		getBotsa
    
    
    
    
    aRequest(searchValue);
	}, [searchValue]);

  return <div>
    <BotList bots={bots}/>

      
  </div>
};





export default App;
