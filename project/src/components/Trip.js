import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "./images/london1.jpeg";
import Trip2 from "./images/sydney.jpeg";
import Trip3 from "./images/dubai.avif";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip to London"
          text="London is a world unto itself. The eclectic neighborhoods, which are home to a blend of historical landmarks and modern-day attractions, can keep you occupied for days. If it's your first time in London, join a tour that takes you past top spots like the Tate Modern art institution, Buckingham Palace, the Tower of London, Borough Market and the British Museum, before sitting down to a classic afternoon tea or checking out a local pub for a Sunday roast."
        />

        <TripData
          image={Trip2}
          heading="Trip to Sydney"
          text="Sydney offers more than just a dizzying array of famous landmarks, such as the Sydney Opera House, Mrs. Macquarie's Chair and the Sydney Harbour Bridge. This Australia metropolis boasts a warm, sunny climate that is ideal for relaxing or surfing at world-renowned beaches like Coogee, Bondi and Manly. Sydney also hosts several seasonal events, including concerts and food festivals."
        />

        <TripData
          image={Trip3}
          heading="Trip to Dubai"
          text="Stunning Persian Gulf views, heart-pumping activities and historical landmarks await you in Dubai. This Middle Eastern city is filled with some of the world's most notable and unique attractions, including the Dubai Mall, indoor Ski Dubai and Burj Khalifa, the tallest building on the planet. But the city still holds onto its heritage, as seen in the Bastakiya Quarter and the traditional Gold and Spice souks."
        />
      </div>
    </div>
  );
}

export default Trip;
