import React from 'react';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navigation';
import Footer from './components/footer';
import headshot from './images/headshot.jpeg';

function About(props) {
    return (
        <div>
        <div>
            <Navigation />
         </div>
         <div class="aboutMe">
             <div class="image">
             <img class="selfPortrait" src={headshot} alt="headshot"/>
             </div>
             <div class="aboutWords">
                 <h2 class="title">It's nice to meet you!</h2>
                 <p class="subtitle">I am a senior at Cornell passionate about entrepreneurship, 
                     business strategy, and product studying Applied Economics and 
                     Management in the Dyson School. But outside of all that boring stuff,
                     I like to run 🏃🏻‍♂️, listen to music 🎶, and be really annoying to my friends 🙄.</p>
             </div>
         </div>
         <div class="extras">
             <div class="music">
             <h3 class="extrasTitle">🎶 Currently Listening</h3>
             <iframe src="https://open.spotify.com/embed/playlist/5DY5NrAb5sjuImNTjoEjRl" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
             </div>
             <div class="readingList">
             <h3 class="extrasTitle">📖 Good Reads</h3>
             <ul>
                 <li class="bookTitle">The Making of a Manager by Julie Zhuo</li>
                 <li class="bookTitle">The One World Schoolhouse by Sal Khan</li>
                 <li class="bookTitle">Mindsight by Dan Siegel</li>
             </ul>
             </div>
         </div>

         <div>
             <Footer />
         </div>
         <br></br>
         </div>
    );
}

export default About;