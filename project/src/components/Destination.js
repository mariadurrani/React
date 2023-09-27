import "./DestinationStyles.css";
import Image1 from "./images/paris1.webp";
import Image2 from "./images/paris2.webp";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      <div className="first-des">
        <div className="des-text">
          <h2>Paris, France</h2>
          <p>
            France's magnetic City of Light is a perennial tourist destination,
            drawing visitors with its iconic attractions, like the Eiffel Tower
            and the Louvre, and its unmistakable je ne sais quoi. Quaint cafes,
            trendy shopping districts and Haussmann architecture give Paris its
            timeless beauty. But the city's best asset is that you're likely to
            discover something new with each trip or season (read: Paris is
            always a good idea). To best explore France's ever-changing capital,
            get lost wandering the charming cobblestone streets, learn its
            secrets on a walking tour, head to dynamic art exhibits like the
            Atelier des Lumières or gourmandize at the latest restaurants and
            pastry shops.
          </p>
        </div>
        <div className="image">
          <img alt="img" src={Image1} />
          <img alt="img" src={Image2} />
        </div>
      </div>
    </div>
  );
};

export default Destination;
