import { useState } from 'react'

function BattleSimulator({ onReturn }) {
  const [battleStarted, setBattleStarted] = useState(false)

  return (
    <div className="battle-frame">
      {battleStarted ? (
        <>
          <iframe
            src="https://play.pokemonshowdown.com/battle-gen9randombattle-1"
            className="showdown-embed"
            title="PKClash Battle"
          />
          <button className="return-btn" onClick={onReturn}>
            ← Return to Main Menu
          </button>
        </>
      ) : (
        <div style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          color: '#ffcc00'
        }}>
          <h2>Gen 9 Random Battle</h2>
          <p>AI Opponent Ready</p>
          <button onClick={() => setBattleStarted(true)}>
            START BATTLE
          </button>
        </div>
      )}
    </div>
  )
}

export default BattleSimulator
