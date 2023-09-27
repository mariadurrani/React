import "./HomeStyles.css";
import Hero from "./Hero";
import Destination from "./Destination";
import Trip from "./Trip";

function Home() {
  return (
    <>
      <Hero
        cName="hero"
        heroImg="https://www.clubstaffing.com/siteassets/blogs/allied-destinations/med-lab-ca-hero-blog-cs.jpg?format=webp"
        title="Explore and Travel"
        text="Choose Your Favorite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
    </>
  );
}

export default Home;
