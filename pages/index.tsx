import defaultIcons from "./_icons";
import { useEffect, useState } from 'react';

export default function Home() {
  const [dices, setDices] = useState([] as string[])
  const [isRolling, setIsRolling] = useState(false)

  const count = 3
  const icons = defaultIcons.icons
  const colors = [
    "#1664a2",
    "#2EC4B6",
    "#E71D36",
    "#FF9F1C",
    "#9c27b0",
    "#00bcd4",
    "#4caf50",
    "#9e9e9e"
  ]
  
  function randomDice() {
    return icons[Math.round(Math.random() * (icons.length - 1))];
  }

  function randomColor() {
    return colors[Math.round(Math.random() * (colors.length - 1))];
  }

  function roll() {
    setIsRolling(!isRolling)
    let diceArray = [] as string[]
    for (let i = 0; i < count; i++) {
      let dice = randomDice();
      diceArray.push(dice);
    }
    setDices(diceArray)
  }

  useEffect(() => {
    roll()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-8 sm:py-2">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-8">Dice Opener</h1>
      <button type="button" onClick={() => roll()} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get rolling</button>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {dices.map((dice, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            alt={dice}
            title={dice}
            className={`flex max-w-xl flex-col items-start justify-between ${isRolling ? 'rotate' : ''}`}
            key={index}
            src={dice}
            style={{backgroundColor: randomColor()}}
          />
          ))}
      </div>
    </main>
  )
}
