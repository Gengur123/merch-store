import React from "react";
import BiographyBlock from "./components/BiographyBlock";
import BuyRestockBlock from "./components/BuyRestockBlock";
import CareerBlock from "./components/CareerBlock";
import ContactBlock from "./components/ContactBlock";
import LocationBlock from "./components/LocationBlock";
import MerchBlock from "./components/MerchBlock";
import NavbarBlock from "./components/NavbarBlock";


function App () {
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
          <MerchBlock />
        </div>

        <div class="column">

        </div>
      </div>

      <div class="row">
        <div class="column">

        </div>

        <div class="column">
          <BuyRestockBlock />
        </div>

        <div class="column">

        </div>
      </div>
    </>
  )
}

export default App;