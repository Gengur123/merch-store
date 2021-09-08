import React from 'react'

function MerchBlock ( { drinkCount, chipCount, hotDogCount }) {
  return (
    <>
      <h3>Food and Drinks</h3>
      <table>
        <tr>
          <td>DRINKS</td>
          <td>{ drinkCount }</td>
        </tr>
        <br />
        <br />
        <tr>
          <td>CHIPS</td>
          <td>{ chipCount }</td>
        </tr>
        <br />
        <br />
        <tr>
          <td>HOT DOGS</td>
          <td> { hotDogCount }</td>
        </tr>
      </table>
    </>
  )
}

export default MerchBlock;