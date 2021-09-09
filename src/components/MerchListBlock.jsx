import React from 'react';



function MerchListBlock(props) {
  return (
    <table>
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
          <th><button onClick={() => props.countAddOne(i)}>Buy</button></th>
          <th><button onClick={() => props.countMinusOne(i)}>Restock</button></th>
          <th><button onClick={() => props.removeMerch(i)}>Delete</button></th>
        </tr>
      })}
    </table>
  );
}

export default MerchListBlock;