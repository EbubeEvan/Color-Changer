import React from 'react'

const Palette = ({entry, hexValue, isDarkText}) => {
  return (
    <div className='palette' style={{
        backgroundColor : entry,
        color: isDarkText ? 'black' : 'white'
        }}>
        <p>{entry ? entry : 'Enter Colour'}</p>

        <p>{hexValue ? hexValue : null}</p>
    </div>
  )
}

Palette.defaultProps =  {
    entry : 'Empty color Value'
}

export default Palette