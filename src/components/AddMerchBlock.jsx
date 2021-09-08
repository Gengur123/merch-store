import React, {useState} from 'react'

function AddMerchBlock ({addMerch}) {

  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [quantity, setQuantity] = useState();

  const handleSubmit = (event) => {
    addMerch([name, description, quantity])
    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={e => {handleSubmit(e)}}>
        <label>Name</label>
        <br />
        <input 
          name='name' 
          type='text'
          value={name}
          onChange = {e => setName(e.target.value)}
        />
        <br/>
        <label>Description</label>
        <br />
        <input 
          name='description' 
          type='text'
          value={description}
          onChange = {e => setDescription(e.target.value)}
        />
        <br />
        <label>Quantity</label>
        <br />
        <input
          name='quantity' 
          type='number'
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
        />
        <br/>
        <input 
          // className='submitButton'
          type='submit' 
          value='Add Merch' 
        />
      </form>
    </>
    // <div>
    //   <h2>Hi</h2>
    //     <p></p>
    // </div>
  )
}

export default AddMerchBlock;