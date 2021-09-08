import React, {useState} from "react";
import BiographyBlock from "./components/BiographyBlock";
import BuyRestockBlock from "./components/BuyRestockBlock";
import CareerBlock from "./components/CareerBlock";
import ContactBlock from "./components/ContactBlock";
import LocationBlock from "./components/LocationBlock";
import MerchBlock from "./components/MerchBlock";
import NavbarBlock from "./components/NavbarBlock";


function App () {

  const [drinkCount, setDrinkCount] = useState(0)
  const [chipCount, setChipCount] = useState(0)
  const [hotDogCount, setHotDogCount] = useState(0)

  function addOneDrink(){
    setDrinkCount(drinkCount + 1)
  }
  function addOneChip(){
    setChipCount(chipCount + 1)
  }
  function addOneHotDog(){
    setHotDogCount(hotDogCount + 1)
  }
  return (
    <>
      <NavbarBlock />
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
          <MerchBlock drinkCount={drinkCount} chipCount={chipCount} hotDogCount={hotDogCount} />
        </div>

        <div class="column">

        </div>
      </div>

      <div class="row">
        <div class="column">

        </div>

        <div class="column">
          <BuyRestockBlock  drinkCountAddOne={addOneDrink} chipCountAddOne={addOneChip} hotDogCountAddOne={addOneHotDog} />
        </div>

        <div class="column">

        </div>
      </div>
    </>
  )
}

export default App;