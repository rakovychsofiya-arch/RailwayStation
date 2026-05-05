import React, { useState } from 'react';
import trainsData from '../data/trains.js';
import TrainList from '../components/TrainList';
const Home = () => {
    //Розділяємо на різні стани (куди та звідки)
    const [fromQuery, setFromQuery] = useState('');
    const filteredTrains = trainsData.filter(train => {
    const matchesFrom = train.route.from.toLowerCase().includes(fromQuery.toLowerCase());
    return matchesFrom;
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
             </div>  
             <TrainList trains={filteredTrains} />
        </div>  
        );
};
export default Home;