import {Container} from "./style.js"

import AboutHeader from "./AboutHeader/AboutHeader.jsx";
import AboutSites from "./AboutSites/AboutSites.jsx";
import {skills} from "../mock/skills.js";
import OurBillion from "./OurBillion/OurBillion.jsx";
import OurGallery from "./OurGallery/OurGallery.jsx";

const About = () => {
  return (
      <Container>
        <AboutHeader/>
        <AboutSites data={skills}/>
        <OurBillion/>
        <OurGallery/>
        
      </Container>
  );
};

export default About;