import React from 'react'
import colorNames from 'colornames'

const Collector = ({
    entry, setEntry, setHexValue, isDarkText, setIsDarkText
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="entry">Add color</label>
        <input
        autoFocus
        id='search' 
        type="text"
        role='find color' 
        placeholder='Add color name'
        value={entry}
        onChange={(e) => {
            setEntry(e.target.value)
            setHexValue(colorNames(e.target.value))
        }}
    />

        <button
            type='button'
            onClick={() => (setIsDarkText(!isDarkText))}
        >
            Toggle the text color
        </button>
    </form>
  )
}

export default Collector