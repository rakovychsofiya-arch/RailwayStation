import React from "react";
const TrainCard=({train})=>{
    const formatDuration = (minutes)=>{
        const h = Math.floor(minutes/60);
        const m = minutes % 60;
        return `${h} г  ${m} хв `
    }
};
const minPrice = Math.min(...train.wagons.map(w => w.price));
