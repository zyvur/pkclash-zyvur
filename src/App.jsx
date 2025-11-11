import { useState } from 'react'
import BattleSimulator from './BattleSimulator'

function App() {
  const [inBattle, setInBattle] = useState(false)
  const [modeSelected, setModeSelected] = useState(false)

  if (inBattle) {
    return <BattleSimulator onReturn={() => setInBattle(false)} />
  }

  return (
    <div className="gba-container">
      <div className="left-side">
        <header>
          <h1>PKClash</h1>
          <p>Stake. Clash. Win.</p>
        </header>

        <div className="mode-select">
          <button onClick={() => setModeSelected(true)}>
            Gen 9 Random Battle
          </button>
        </div>

        {modeSelected && (
          <div className="stake-select">
            <button onClick={() => setInBattle(true)}>
              💰 $5 Match - Ready Up
            </button>
          </div>
        )}
      </div>

      <div className="right-side ladder-side">
        <h3>LIVE LADDER</h3>
        <ul>
          <li><span>1. @Zyvur</span> <span>1500</span></li>
          <li><span>2. AI_Rival</span> <span>1480</span></li>
          <li><span>3. Player3</span> <span>1420</span></li>
        </ul>
      </div>
    </div>
  )
}

export default App
