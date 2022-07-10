import { useState } from 'react'


const NextButton = ({ handleClick, lable }) => {
  return (
    <button onClick={handleClick}>{lable}</button>
  )
}

const VoteButton = ({ pointsInc, lable }) => {
  return (
    <button onClick={pointsInc}>{lable}</button>
  )
}

const HighestVote = ({ anecdotes, points }) => {
  let max = Math.max(...points)
  if (max === 0) {
    return (
      <p>No votes registered</p>
    )
  }
  let quoteOfDay = points.indexOf(max)
  return (
    <p>{anecdotes[quoteOfDay]}</p>
  )
}

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  let quotePos = randomGenerator()

  function randomGenerator() {
    const random = Math.floor(Math.random() * 7)
    return random
  }

  const handleClick = () => {
    quotePos = randomGenerator
    setSelected(quotePos)
  }

  const pointsInc = () => {

    const copy = [...points]
    copy[selected]++
    setPoints(copy);

  }



  const [selected, setSelected] = useState(Math.floor(Math.random() * 7))
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  return (
    <>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div>
        <NextButton handleClick={handleClick} lable={"next anecdote"} />
        <VoteButton pointsInc={pointsInc} lable={"Vote"} />
      </div>
      <h2>Anecdote with most votes</h2>
      <HighestVote anecdotes={anecdotes} points={points} />

    </>
  );
}

export default App;
