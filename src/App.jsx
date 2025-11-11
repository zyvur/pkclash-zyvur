import { useState } from 'react'
import trainer1 from './assets/trainer1.png'  // You'll add these
import trainer2 from './assets/trainer2.png'

function App() {
  const [showBattle, setShowBattle] = useState(false)
  const [stake, setStake] = useState(0)

  const startClash = (amount) => {
    setStake(amount)
    setShowBattle(true)
  }

  if (showBattle) {
    return (
      <div className="battle-sim">
        <h2>VS</h2>
        <div className="vs-screen">
          <div>
            <img src={trainer1} alt="You" />
            <p>@Zyvur</p>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>VS</div>
          <div>
            <img src={trainer2} alt="Rival" />
            <p>Rival</p>
          </div>
        </div>
        <p>Battle loading...</p>
        <button onClick={() => {
          setShowBattle(false)
          alert(`YOU WIN!\n+$${stake * 0.95} added!`)
        }}>
          END BATTLE
        </button>
      </div>
    )
  }

  return (
    <div className="pkclash-theme">
      <header>
        <h1>PKClash</h1>
        <p>Choose your stake!</p>
      </header>
      <div className="stake-grid">
        <div>
          <button onClick={() => startClash(5)}></button>
          <div className="stake-label">$5 Bronze</div>
        </div>
        <div>
          <button onClick={() => startClash(10)}></button>
          <div className="stake-label">$10 Silver</div>
        </div>
        <div>
          <button onClick={() => startClash(20)}></button>
          <div className="stake-label">$20 Gold</div>
        </div>
      </div>
      <div className="live-ladder">
        <h3>LEADERBOARD</h3>
        <ul>
          <li><span>1. @Zyvur</span> <span>1500</span></li>
          <li><span>2. Rival</span> <span>1480</span></li>
          <li><span>3. Noob</span> <span>1200</span></li>
        </ul>
      </div>
      <footer>
        <p>Demo • AU Legal • <a href="https://pkclash.au">Go Live</a></p>
      </footer>
    </div>
  )
}

export default App
