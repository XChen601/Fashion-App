import "../../css/LandingPage.css";
import 'bootstrap/dist/css/bootstrap.css';
import {Parallax} from "react-parallax";
import woman from "../../components/img/woman.jpg";
import {FcGoogle} from "react-icons/fc";


import dogs from "../../components/img/dogs.png";
import {Cursor} from "react-simple-typewriter";
import Navigation from "../Navigation";
import {Helmet} from "react-helmet";
import {Container} from "reactstrap";

function LandingPage(args) {
    
    return (
      <div>
        <Helmet>
          <title>PerfectFit.com</title>
        </Helmet>
        <Navigation/>
        <Parallax strength={600} bgImage={woman}>
          <div className="content">
            <div className="text-content"> 
              <h1 className="type-writer">
              Effortless <span className="highlight">Style</span> At Your Fingertips
                <span style={{color: "yellow", fontweight: "bolder"}}>
                  <Cursor cursorStyle=" <" />
                </span>
              </h1>      
            </div>
          </div>
        </Parallax>
        <Parallax strength={300} style={{backgroundColor: "black"}}>
        <div className="content">
            <div className="text-content"> 
              <h1 className="type-writer part-two">
              PerfectFit prepares outfits everyday <br/>based on Your Personal <span style={{color: "red"}}>
              Wardrobe </span>and
                <span style={{color: "yellow"}}>
                  <Cursor cursorStyle=" Weather."/>
                </span>
              </h1>      
            </div>
          </div>
        </Parallax>
        <Parallax strength={600} bgImage={dogs}>
            <div className="content">
              <div className="text-content"> 
              <button className="sign-up">Sign Up Today <FcGoogle/></button> 
              </div>
            </div>
        </Parallax>
        <footer className="footer">
          <Container fluid="xl">
            All Rights Reserved | CUNY TECH PREP SUMMER 2023 HACKATHON | Designed By Team Magic ✨ 
          </Container>
        </footer>
        
      </div>
    );
  }
  
  export default LandingPage;