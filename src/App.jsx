import { useState } from 'react'

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
            <span className="trainer-emoji">Trainer</span>
            <p>@Zyvur</p>
          </div>
          <div className="vs-text">VS</div>
          <div>
            <span className="trainer-emoji">Rival</span>
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
