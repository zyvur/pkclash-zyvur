import { useState } from 'react'

function App() {
  const [showBattle, setShowBattle] = useState(false)

  const startClash = (stake) => {
    setShowBattle(true)
    alert(`Launching $${stake} Clash!\n\nIn live version: A new window opens with your opponent.`)
  }

  if (showBattle) {
    return (
      <div className="battle-sim">
        <h2>Battle Window (Live in v2)</h2>
        <p>Showdown-style 1v1 battle vs. opponent.</p>
        <button onClick={() => { setShowBattle(false); alert('You Win! +$' + (stake * 0.95)) }}>
          End Battle (You Win)
        </button>
      </div>
    )
  }

  return (
    <div className="pkclash-theme">
      <header>
        <h1>PKClash Arena</h1>
        <p>Stake real money. Battle in ranked PvP. Win big.</p>
      </header>
      <div className="stake-grid">
        <button onClick={() => startClash(5)}>$5 Bronze Clash</button>
        <button onClick={() => startClash(10)}>$10 Silver Clash</button>
        <button onClick={() => startClash(20)}>$20 Gold Clash</button>
      </div>
      <div className="live-ladder">
        <h3>Live Ladder</h3>
        <ul>
          <li>@Zyvur – 1500 ELO (5 Wins)</li>
          <li>Opponent – 1480 ELO (Waiting...)</li>
        </ul>
      </div>
      <footer>
        <p>Demo Mode | AU Legal Skill PvP | <a href="https://pkclash.au" target="_blank">Go Live →</a></p>
      </footer>
    </div>
  )
}

export default App
