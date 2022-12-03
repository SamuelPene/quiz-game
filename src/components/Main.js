function Main() {
    return (
      <div className="Main">
       <div className='main-game-container flex-column'>
           <div className='title-container'>
               <h1><strong>Who Wants to be a Millionaire!</strong></h1>
           </div>
           <div className='main-btn-container flex-column'>
               <button className='btn start-btn'>Start</button>
               <button className='btn rules-btn'>Rules</button>
               <button className='btn high-scores-btn'>High Scores</button>
           </div>
       </div>
      </div>
    );
  }
  
  export default Main;