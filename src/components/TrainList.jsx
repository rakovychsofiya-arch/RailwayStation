import React from "react";
import TrainCard from "./TrainCard";
const TrainList=({trains}) =>{
    if (trains.length ===0){
        return<p className="no-result">Потягів не знайдено</p>
    }
    return(
        <div className= "train-list">
            {trains.map((train)=>(
                <TrainCard key={train.id} train={train}/>
            ))}
        </div>

    );


};
export default TrainList;