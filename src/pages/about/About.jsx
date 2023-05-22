import Banner from "./../../components/banner/Banner";
import Collapse from "./../../components/collapse/Collapse";
import aboutUsData from "./../../data/About-data.js";
import "./about.scss";

function About() {
  return (
    <>
      <Banner img="img-mountain" size="banner--height" />
      <section className="about-container">
        {aboutUsData.map((data, idx) => (
          <Collapse
            title={data.title}
            text={data.text}
            collapseState={false}
            key={`${data.title}-${idx}`}
          />
        ))}
      </section>
    </>
  );
}

export default About;
