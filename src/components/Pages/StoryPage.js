import "../../css/StoryPage.css";
import Navigation from "../Navigation";
import TypeAnimation from 'react-typing-sequence';
import styles from './styles.module.css';
import perfectFitVideo from "../img/perfect-fit.mp4"
import {Container} from "reactstrap";
const typingText = [
	{
		content: 'Millions of people ask themselves everyday:',
		className: styles.text1,
	},
	
	// This is how you set up a multiple sequence nested in the typing timeline.
	// You can use it to nest infinite repeat yoyo sequences, or to set up an infinite repeat nested element
	{
		text: [
			{
				content: 'Should this today?',
				className: styles.text3,
				tag: 'span',
				yoyo: true,
			},
            {
				content: 'Is it going to rain?',
				className: styles.text3,
				tag: 'span',
				yoyo: true,
			},
			{
				content: 'Does this outfit even look good?',
				className: styles.text3,
				tag: 'span',
				yoyo: true,
			},
			
		],
		repeat: -1,
		repeatDelay: 1000,
		indexTrigger: 2 // This is the index of the nested sequence that triggers the typing of the next element in the main sequence
	},
	500,
	{
		content: 'PerfectFit is the solution 👇',
		className: styles.text1,
	},
];

function StoryPage(){
    return(
        <div>
            <Navigation/>
            <div className={styles.container}>
			    <TypeAnimation
				    text={typingText}
				    // repeat={-1}
				    // repeatDelay={2000}
			    />
		    </div>
            <div className="two">
            <video className="video-player" src={perfectFitVideo} controls width={"100%"} />
                <footer className="footer-story">
                    <Container fluid="xl">
                        All Rights Reserved | <span className="white-footer">CUNY TECH PREP SUMMER 2023 HACKATHON</span> | Designed By <span className="white-footer">Team Magic ✨</span> 
                    </Container>
                </footer>
            </div>
        </div>
    );
}
export default StoryPage;