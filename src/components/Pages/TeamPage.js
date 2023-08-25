import "../../css/TeamPage.css";
import Navigation from "../Navigation";
import {Helmet} from "react-helmet";
import {Container, Row, Col} from "reactstrap";
import {Parallax} from "react-parallax";
// Images Imports
import front from "../../components/img/front.jpg";
import back from "../../components/img/back.jpg";
import reactLogo from '../img/react.svg';
import salif from "../../components/img/salif.jpg";
import bryan from "../../components/img/bryan.png";
import xing from "../../components/img/xing.png";
import tenzing from "../../components/img/tenzing.jpeg";
import html from "../../components/img/html.svg";
import css from "../../components/img/css.svg";
import javascript from "../../components/img/javascript.svg";
import nodejs from "../../components/img/nodejs.svg";
import firebase from "../../components/img/firebase.svg";
function TeamPage(){
    return(
        <div className="main">
            <Helmet>
                <title>Team</title>
            </Helmet>
            <Navigation/>

            <section className="section part-one">
                <Container fluid="xl">
                    <h1 id="meet">Our Tech Stack</h1>
                    <br/>
                    <Row>
                        <Col><img src={html} className="lang-logo" alt="html logo" /></Col>
                        <Col><img src={css} className="lang-logo" alt="css logo" /></Col>
                        <Col><img src={javascript} className="lang-logo" alt="javascript logo" /></Col>
                        <Col><img src={nodejs} className="lang-logo" alt="node js logo" /></Col>
                        <Col><img src={reactLogo} className="App-logo" alt="react logo" /></Col>
                        <Col><img src={firebase} className="lang-logo" alt="firebase logo" /></Col>
                        
                    </Row>
                </Container>
            </section>
            <section className="meet-txt">
                <Container fluid="xl">
                    <h1 id="meet">Meet Team Magic ✨</h1>
                </Container>
            </section>

            {/* Front End Section*/}
            <Container fluid="xl">
                    <Parallax strength={600} bgImage={front} className="img-front">
                        <div className="team-content">
                            <div className="team-text-content"> 
                                <h1 className="team-type-writer">Front-End</h1>      
                            </div>
                        </div>
                    </Parallax>
                    <Row>
                        <Col className="pic">
                            <img src={salif} alt="Logo"/>
                        </Col>
                        <Col>
                            <h1 className="name">Salif Tankoano</h1>
                            <p className="salif-text">" Every pixel, every animation, every interaction is a testament to my commitment to <span id="key-word">excellence.</span>"<br/><br/>I believe that a website is more than just a collection of pages – it's an immersive <span id="key-word">journey</span>, a digital tapestry where every thread of code contributes to an enchanting narrative.</p>
                        </Col>
                        <Col className="space">
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col className="space">
                            
                        </Col>
                        <Col className="person-text">
                            <h1 className="name">Bryan Rivera</h1>
                            <p className="salif-text">" My role is to create the best User experience for our customers"<br/><br/>User retention matters the most to me!</p>
                            
                        </Col>

                        <Col className="pic">
                            <img src={bryan} alt="Logo"/>
                        </Col>
                    </Row>
            </Container>

            {/* Back End Section*/}
            <Container fluid="xl">
                    <Parallax strength={600} bgImage={back} className="img-back">
                        <div className="team-content">
                            <div className="team-text-content"> 
                                <h1 className="team-type-writer">
                                    Back-End
                                </h1>      
                            </div>
                        </div>
                    </Parallax>
                    <Row>
                        <Col className="pic">
                            <img src={xing} alt="Logo"/>
                        </Col>
                        <Col className="person-text">
                            <h1 className="name">Xing Chen</h1>
                            <p className="salif-text">" My role as a back-end developer is to create seemless flow of data "</p>
                            
                        </Col>
                        <Col className="space">
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col className="space">
                            
                        </Col>
                        <Col className="person-text">
                            <h1 className="name">Tenzing Nyima</h1>
                            <p className="salif-text">" My role as a backend developer was to... "<br/>Efficiency matters to me!</p>
                        </Col>

                        <Col className="pic">
                            <img src={tenzing} alt="Logo"/>
                        </Col>
                    </Row>
            </Container>

            <footer className="footer">
                <Container fluid="xl">
                    All Rights Reserved | CUNY TECH PREP SUMMER 2023 HACKATHON | Designed By Team Magic ✨ 
                </Container>
            </footer>
        </div>  
    );
}
export default TeamPage;