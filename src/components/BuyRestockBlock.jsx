import React from 'react'

function BuyRestockBlock ({ drinkCountAddOne, chipCountAddOne, hotDogCountAddOne, drinkCountMinusOne, chipCountMinusOne, hotDogCountMinusOne }) {
  return (
    <div>
      <table>
        <tr>
          <button onClick={drinkCountAddOne}>Stock 1 Drink</button>
          <button onClick={drinkCountMinusOne}>Buy 1 Drink</button>
        </tr>
        <tr>
          <button onClick={chipCountAddOne}>Stock 1 Bag of Chips</button>
          <button onClick={chipCountMinusOne}>Buy 1 Bag of Chips</button>
        </tr>
        <tr>
          <button onClick={hotDogCountAddOne}>Stock 1 Hot Dog</button>
          <button onClick={hotDogCountMinusOne}>Buy 1 Hot Dog</button>
        </tr>
      </table>
    </div>
  )
}

export default BuyRestockBlock;