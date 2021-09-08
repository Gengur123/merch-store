import React from 'react'

function BuyRestockBlock ({ drinkCountAddOne, chipCountAddOne, hotDogCountAddOne }) {
  return (
    <div>
      <button onClick={drinkCountAddOne}>Stock 1 Drink</button>
      <br/>
      <button onClick={chipCountAddOne}>Stock 1 Bag of Chips</button>
      <br/>
      <button onClick={hotDogCountAddOne}>Stock 1 Hot Dog</button>
    </div>
  )
}

export default BuyRestockBlock;