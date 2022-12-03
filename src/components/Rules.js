function Rules() {
    return (
      <div className="Rules">
       <div className='main-game-container flex-column'>
           <div className='title-container'><strong>Rules</strong></div>
           <li className='rules-list'>
               <ol>You have 30 seconds for each question</ol>
               <ol>You have 3 lifelines which increase your chances</ol>
               <ol>If you hit the $5K, $100K or $1m, that's the minimum you win</ol>
               <ol>If you hit above a minimum and lose, you fall back to the minimum</ol>
               <ol>You can opt to take your winnings at any time within the 30 seconds, for which you will receive the previous amount you reached</ol>
           </li>
           <button className='return-btn btn'>Return</button>
       </div>
      </div>
    );
  }
  
  export default Rules;