import React from "react";
const TrainCard=({train})=>{
    const formatDuration = (minutes)=>{
        const h = Math.floor(minutes/60);
        const m = minutes % 60;
        return `${h} г  ${m} хв `
    };
const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("uk-UA", {
      day: "numeric",
      month: "long",
    });
  };
const minPrice = Math.min(...train.wagons.map(w => w.price));
return (
    <div className="train-card">
      <div className="train-header">
        <span className="train-number">{train.number}     </span>
        <span className="train-type">{train.train_type}</span>
      </div>
      
      <div className="train-route">
        <h3>{train.route.from} → {train.route.to}</h3>
      </div>

      <div className="train-info">
        <div className="time-block">
          <p>Відправлення:<strong>{formatDate(train.departure)}</strong> о{" "} 
           <strong>{new Date(train.departure).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</strong></p>
          <p>Прибуття: {formatDate(train.arrival)} о{" "}
            {new Date(train.arrival).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
        </div>
        <p className="duration">У дорозі: {formatDuration(train.durationMinutes)}</p>
      </div>

      <div className="train-footer">
        <span className="price">Ціни від: {minPrice} ₴</span><br></br>
        <button className="select-btn"><strong>Вибрати</strong></button>
      </div>
    </div>
  );
};

export default TrainCard;