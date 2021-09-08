import React, {useState} from "react";
import AddMerchBlock from "./components/AddMerchBlock";
import BiographyBlock from "./components/BiographyBlock";
import BuyRestockBlock from "./components/BuyRestockBlock";
import CareerBlock from "./components/CareerBlock";
import ContactBlock from "./components/ContactBlock";
import LocationBlock from "./components/LocationBlock";
import MerchBlock from "./components/MerchBlock";
import MerchListBlock from "./components/MerchListBlock";
import NavbarBlock from "./components/NavbarBlock";
// import MerchControl from "./components/MerchControl"




function App () {

  const [count, setCount] = useState([]);
  const addMerch = (temp) => {
    let temps = [...count, temp];
    setCount(temps);
  }

  //   [sets default count, function]
  const [drinkCount, setDrinkCount] = useState("Out of Stock")
  const [chipCount, setChipCount] = useState("Out of Stock")
  const [hotDogCount, setHotDogCount] = useState("Out of Stock")
  
  function addOneDrink(){
    if (drinkCount === "Out of Stock"){
      setDrinkCount(1)
    }else {
      setDrinkCount(drinkCount + 1)
    }
  }
  function addOneChip(){
    if (chipCount === "Out of Stock"){
      setChipCount(1)
    }else {
      setChipCount(chipCount + 1)
    }
  }
  function addOneHotDog(){
    if (hotDogCount === "Out of Stock"){
      setHotDogCount(1)
    }else {
      setHotDogCount(hotDogCount + 1)
    }
  }
  function removeOneDrink() {
    if (drinkCount === 1) {
      setDrinkCount("Out of Stock")
    } else if (drinkCount === "Out of Stock") {
      setDrinkCount(drinkCount)
    } else {
    setDrinkCount(drinkCount - 1)
    }
  }
  function removeOneChip() {
    if (chipCount === 1) {
      setChipCount("Out of Stock")
    } else if (chipCount === "Out of Stock") {
      setChipCount(chipCount)
    } else {
    setChipCount(chipCount - 1)
    }
  }
  function removeOneHotDog() {
    if (hotDogCount === 1) {
      setHotDogCount("Out of Stock")
    } else if (hotDogCount === "Out of Stock") {
      setHotDogCount(hotDogCount)
    } else {
    setHotDogCount(hotDogCount - 1)
    }
  }

  return (
    <>
      <NavbarBlock />
      {/* <MerchControl /> */}
      <hr/>
      <div class="row">
        <div class="column" className="location">
          <LocationBlock />
        </div>

        <div class="column">
          <BiographyBlock />
        </div>

        <div class="column">
          <CareerBlock />
        </div>
      </div>

      <div class="row">
        <div class="column">
          <ContactBlock />
        </div>

        <div class="column">
          <MerchBlock drinkCount={drinkCount} chipCount={chipCount} hotDogCount={hotDogCount} merch={count} />
        </div>

        <div class="column">
          <MerchListBlock merch={count} />
        </div>
      </div>

      <div class="row">
        <div class="column">

        </div>

        <div class="column">
          <BuyRestockBlock drinkCountAddOne={addOneDrink} chipCountAddOne={addOneChip} hotDogCountAddOne={addOneHotDog} drinkCountMinusOne={removeOneDrink} chipCountMinusOne={removeOneChip} hotDogCountMinusOne={removeOneHotDog} />
        </div>

        <div class="column">
          <AddMerchBlock addMerch={addMerch} />
        </div>
      </div>
    </>
  )
}

export default App;