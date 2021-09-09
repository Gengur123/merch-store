import React from 'react'

function MerchBlock ( {drinkCount, chipCount, hotDogCount} ) {
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


      {/* <table>
      <thead> 
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Quantity</th>
        </tr>
        </thead> 
            {props.merch.map((v, i) => {
        return <tr>
          <th>{v[0]}</th>
          <th>{v[1]}</th>
          <th>{v[2]}</th>
        </tr>
      })}
    </table> */}
    </>
  )
}

export default MerchBlock;