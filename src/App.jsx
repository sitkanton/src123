import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import OfferSection from "./components/offerSection/OfferSection";
import DescriptionSection from "./components/descriptionSection/DescriptionSection";
import ServiceSection from "./components/serviceSection/ServiceSection";
import RentalSection from "./components/rentalSection/RentalSection";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <OfferSection />
      <DescriptionSection />
      <ServiceSection />
      <RentalSection/>
    </>
  );
}

export default App;
