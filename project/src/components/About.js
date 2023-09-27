import Hero from "./Hero";
import Trip from "./Trip";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Hero
        cName="hero"
        heroImg="https://www.explore.com/img/gallery/most-incredible-locations-to-experience-summer-solstice-around-the-world/0-shutterstock_16.webp"
        title="About TRAVL"
        url="/"
      />
      <Trip />
      <Footer />
    </>
  );
}
export default About;
