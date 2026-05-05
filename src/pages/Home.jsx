import React, { useState } from 'react';
import trainsData from '../data/trains.js';
import TrainList from '../components/TrainList';
const Home = () => {
    //Розділяємо на різні стани (куди та звідки)
    const [fromQuery, setFromQuery] = useState('');
    const [toQuery, setToQuery] = useState('');
    const filteredTrains = trainsData.filter(train => {
    const matchesFrom = train.route.from.toLowerCase().includes(fromQuery.toLowerCase());
    const matchesTo = train.route.to.toLowerCase().includes(toQuery.toLowerCase());
    return matchesFrom && matchesTo;
    });
    return (
         <div className="home-page">
             <h1>Пошук потягів</h1>
      
             <div className="search-container">
                 <input 
                  type="text" 
                  placeholder="Звідки..." 
                  value={fromQuery}
                  onChange={(e) => setFromQuery(e.target.value)}
                  className="search-input"
                 />
                 <input 
                 type="text" 
                 placeholder="Куди..." 
                 value={toQuery}
                 onChange={(e) => setToQuery(e.target.value)}
                 className="search-input"
                 />
             </div>  
             <TrainList trains={filteredTrains} />
        </div>  
        );
};
export default Home;