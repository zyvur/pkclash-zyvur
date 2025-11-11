import { useState } from 'react'

function App() {
  const [inBattle, setInBattle] = useState(false)
  const [modeSelected, setModeSelected] = useState(false)

  const startBattle = () => setInBattle(true)

  if (inBattle) {
    return (
      <div className="gba-container">
        <div className="battle-container">
          <iframe
            src="https://play.pokemonshowdown.com/?server=showdown&format=gen9randombattle&challenge=PKClash+vs+AI&roomtoken=autostart"
            className="showdown-embed"
            title="PKClash Gen 9 Random Battle vs AI"
          />
          <button className="return-btn" onClick={() => setInBattle(false)}>
            ← Return to Main Menu
          </button>
        </div>
        <div className="ladder-side">
          <h3>LIVE LADDER</h3>
          <ul>
            <li><span>1. @Zyvur</span> <span>1500 (+$23.75)</span></li>
            <li><span>2. AI_Rival</span> <span>1480</span></li>
            <li><span>3. Challenger</span> <span>1420</span></li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div className="gba-container">
      <div className="left-side">
        <header>
          <h1>PKClash Arena</h1>
          <p>Stake $5 • Pure Skill PvP</p>
        </header>
        <div className="mode-select">
          <button onClick={() => setModeSelected(true)}>
            Gen 9 Random Battle
          </button>
        </div>
        {modeSelected && (
          <div className="stake-select">
            <button onClick={startBattle}>
              💰 $5 Match - Ready Up
            </button>
          </div>
        )}
      </div>
      <div className="ladder-side">
        <h3>LIVE LADDER</h3>
        <ul>
          <li><span>1. @Zyvur</span> <span>1500</span></li>
          <li><span>2. Rival</span> <span>1480</span></li>
          <li><span>3. Player3</span> <span>1420</span></li>
        </ul>
      </div>
    </div>
  )
}

export default App
