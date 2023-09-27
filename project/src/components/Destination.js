import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
import Paris1 from "./images/paris1.webp";
import Paris2 from "./images/paris2.webp";
import Maui1 from "./images/maui1.jpeg";
import Maui2 from "./images/maui2.webp";
import Rome1 from "./images/rome1.webp";
import Rome2 from "./images/rome2.jpeg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>

      <DestinationData
        className="first-des"
        heading="Paris, France"
        text="France's magnetic City of Light is a perennial tourist destination,
            drawing visitors with its iconic attractions, like the Eiffel Tower
            and the Louvre, and its unmistakable je ne sais quoi. Quaint cafes,
            trendy shopping districts and Haussmann architecture give Paris its
            timeless beauty. But the city's best asset is that you're likely to
            discover something new with each trip or season (read: Paris is
            always a good idea). To best explore France's ever-changing capital,
            get lost wandering the charming cobblestone streets, learn its
            secrets on a walking tour, head to dynamic art exhibits like the
            Atelier des Lumières or gourmandize at the latest restaurants and
            pastry shops."
        img1={Paris1}
        img2={Paris2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Maui, Hawaii"
        text="Whether you're driving along the Road to Hana, enjoying a bird's-eye view of Maui's lush coastline from a helicopter, snorkeling with sea turtles or simply relaxing on white or black sand beaches, you'll find that this Hawaiian island is unlike any other tropical destination. Don't miss a chance to visit Haleakala National Park, which is home to one of the world's largest dormant volcanic craters and boasts surreal sunrises. You should also attend a traditional luau for a dose of local culture and a taste of Hawaiian specialties like poi, poke and i'a fish."
        img1={Maui1}
        img2={Maui2}
      />

      <DestinationData
        className="first-des"
        heading="Rome, Italy"
        text="When you visit Italy's capital city, prepare to cross a few must-see landmarks – including the Colosseum, the Trevi Fountain and the Pantheon – off of your bucket list. Travelers can also see some of Italy's greatest treasures, including St. Peter's Basilica and the Sistine Chapel, in Vatican City. Escape the tourist crowds by taking a twilight stroll along the cobblestone streets of Trastevere, or head to Mercato Centrale Roma to sample local delicacies like pistachio gelato. Before leaving, peruse some of Rome's lesser-known museums, art galleries and boutiques, or head to Janiculum Hill for panoramic views of the city. "
        img1={Rome1}
        img2={Rome2}
      />
    </div>
  );
};

export default Destination;
