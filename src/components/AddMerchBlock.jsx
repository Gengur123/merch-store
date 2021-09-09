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
          required
          onChange = {e => setName(e.target.value)}
        />
        <br/>
        <label>Description</label>
        <br />
        <input 
          name='description' 
          type='text'
          value={description}
          required
          onChange = {e => setDescription(e.target.value)}
        />
        <br />
        <label>Quantity</label>
        <br />
        <input
          name='quantity' 
          type='number'
          min='0'
          value={quantity}
          required
          onChange={e => setQuantity(e.target.value)}
        />
        <br/>
        <input 
          type='submit' 
          value='Add Merch' 
        />
      </form>
    </>
  )
}

export default AddMerchBlock;