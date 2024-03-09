import React from 'react';

function Box({ id, width, height, backgroundColor, removeBox }) {
  const boxStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: backgroundColor,
    display: 'inline-block',
    marginRight: '10px',
  };

  return (
    <div style={boxStyle}>
      <button onClick={() => removeBox(id)}>X</button>
    </div>
  );
}

export default Box;
