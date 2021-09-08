import React from 'react'

function BuyRestockBlock ({ drinkCountAddOne, chipCountAddOne, hotDogCountAddOne, drinkCountMinusOne, chipCountMinusOne, hotDogCountMinusOne }) {
  return (
    <div>
      <table>
        <tr>
          <td><button onClick={drinkCountAddOne}>Stock 1 Drink</button></td>
          <td><button onClick={drinkCountMinusOne}>Buy 1 Drink</button></td>
        </tr>
        <tr>
          <td><button onClick={chipCountAddOne}>Stock 1 Bag of Chips</button></td>
          <td><button onClick={chipCountMinusOne}>Buy 1 Bag of Chips</button></td>
        </tr>
        <tr>
          <td><button onClick={hotDogCountAddOne}>Stock 1 Hot Dog</button></td>
          <td><button onClick={hotDogCountMinusOne}>Buy 1 Hot Dog</button></td>
        </tr>
      </table>
    </div>
  )
}

export default BuyRestockBlock;