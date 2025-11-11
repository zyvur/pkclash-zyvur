import { useEffect, useRef } from 'react'

function BattleSimulator({ format = 'gen9randombattle', vsAI = true }) {
  const battleRef = useRef(null)

  useEffect(() => {
    // Load Showdown client CDN (MIT licensed)
    const script = document.createElement('script')
    script.src = 'https://play.pokemonshowdown.com/js/config/config.js'
    document.head.appendChild(script)

    const clientScript = document.createElement('script')
    clientScript.src = 'https://play.pokemonshowdown.com/client.js'
    clientScript.onload = () => {
      // Simulate Gen 9 Random Battle vs AI
      window.app.openInNewRoom('battle', { format })
      // AI opponent (random moves)
      setTimeout(() => {
        // Mock AI logic (real fork later)
        console.log('AI ready - Random Battles loaded')
      }, 1000)
    }
    document.head.appendChild(clientScript)

    // Cleanup
    return () => {
      if (battleRef.current) battleRef.current.innerHTML = ''
    }
  }, [format])

  return (
    <div className="battle-frame">
      <iframe 
        src={`https://play.pokemonshowdown.com/?format=${format}&challenger=PKClash&opponent=AI`}
        width="100%" 
        height="600" 
        className="showdown-embed"
        ref={battleRef}
      />
      <p className="battle-note">vs AI (Gen 9 Random Battles - Real matchmaking soon)</p>
    </div>
  )
}

export default BattleSimulator
