import React from 'react';
import './Siderows.css';


function Siderows({ selected, Icon, tittle}) {
  return (
    <div className={`rows ${selected && "selected"}`}>
        <Icon  sx={{fontSize: 14,}} />
        <span className='text'>{tittle}</span>
    </div>
  )
}

export default Siderows;