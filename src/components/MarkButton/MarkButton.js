import React, { useState } from 'react';
import './MarkButton.css';

function MarkButton() {

  const [isMarked, setIsMarked] = useState(false);

  function handleMarkMovie() {
    setIsMarked(!isMarked)
  }

  return (
    <div>
       <button type="button" className={!isMarked ? "movies-card__mark-button" : "movies-card__mark-button movies-card__mark-button_marked"} onClick={handleMarkMovie}></button>
    </div>
  )
}

export default MarkButton;