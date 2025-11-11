import { useState } from 'react'
import BattleSimulator from './BattleSimulator.jsx' // Showdown embed

function App() {
  const [battleMode, setBattleMode] = useState(null)
  const [inBattle, setInBattle] = useState(false)
  const [stakeReady, setStakeReady] = useState(false)

  const selectMode = (mode) => setBattleMode(mode)

  const readyMatch = () => setStakeReady(true)

  const startBattle = () => setInBattle(true)

  if (inBattle) {
    return (
      <div className="gba-container">
        <BattleSimulator format="gen9randombattle" vsAI={true} />
        <div className="ladder-side">
          <h3>LIVE LADDER</h3>
          <ul>
            <li>1. @Zyvur <span>1500 ELO</span></li>
            <li>2. Rival <span>1480</span></li>
            <li>3. Player3 <span>1420</span></li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div className="gba-container">
      <div className="left-side">
        <header>
          <h1>PKClash</h1>
          <p>Select Battle Mode</p>
        </header>
        <div className="mode-select">
          <button 
            className={battleMode === 'gen9random' ? 'selected' : ''}
            onClick={() => selectMode('gen9random')}
          >
            Gen 9 Random Battle
          </button>
        </div>
        {battleMode === 'gen9random' && (
          <div className="stake-select">
            <button onClick={readyMatch}>💰 $5 Match - Ready Up</button>
            {stakeReady && <button onClick={startBattle}>▶️ Launch Battle</button>}
          </div>
        )}
      </div>
      <div className="ladder-side">
        <h3>LIVE LADDER</h3>
        <ul>
          <li>1. @Zyvur <span>1500 ELO</span></li>
          <li>2. Rival <span>1480</span></li>
          <li>3. Player3 <span>1420</span></li>
        </ul>
      </div>
    </div>
  )
}

export default App
