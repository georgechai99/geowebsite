import React from 'react';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import cvc from '../images/cvc.png';
import roughdraft from '../images/roughdraft.png';
import sofi from '../images/sofi.png';
import salesforce from '../images/salesforce.png';
import equityzen from '../images/equityzen.png';
import beacn from '../images/beacn.png';

function Experience(props) {
    return (
        <div class="container">
             <div class="row">
             <div class="col">
        <Card class="experienceCard">
        <a href="https://sofi.com" class="link"><Card.Img class="cardImage" variant="top" src={sofi} /></a>
          <Card.Body>
            <Card.Title class="cardTitle">Sofi</Card.Title>
            <Card.Text class="cardText">
              Strategic Initiatives
            </Card.Text>
            <Card.Text class="cardsubText">
              September 2021
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        <div class="col">
        <Card class="experienceCard">
        <a href="https://cornellvc.com" class="link"><Card.Img class="cardImage" variant="top" src={cvc} /></a>
          <Card.Body>
            <Card.Title class="cardTitle">Cornell Venture Capital</Card.Title>
            <Card.Text class="cardText">
              President Emeritus
            </Card.Text>
            <Card.Text class="cardsubText">
              September 2018 - May 2021
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        <div class="col">
        <Card class="experienceCard">
        <a href="https://roughdraft.vc" class="link"><Card.Img class="cardImage" variant="top" src={roughdraft} /></a>
          <Card.Body>
            <Card.Title class="cardTitle">Rough Draft Ventures</Card.Title>
            <Card.Text class="cardText">
              Fellow
            </Card.Text>
            <Card.Text class="cardsubText">
              October 2020 - May 2021
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
      {/* </div> */}
      {/* <div class="row"> */}
             <div class="col">
        <Card class="experienceCard">
        <a href="https://salesforce.com" class="link"><Card.Img class="cardImage" variant="top" src={salesforce} /></a>
          <Card.Body>
            <Card.Title class="cardTitle">Salesforce</Card.Title>
            <Card.Text class="cardText">
              Summer Associate
            </Card.Text>
            <Card.Text class="cardsubText">
              June 2019 - August 2019
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        <div class="col">
        <Card class="experienceCard">
        <a href="https://equityzen.com" class="link"><Card.Img class="cardImage" variant="top" src={equityzen} /></a>
          <Card.Body>
            <Card.Title class="cardTitle">EquityZen</Card.Title>
            <Card.Text class="cardText">
              Summer Intern
            </Card.Text>
            <Card.Text class="cardsubText">
              June 2018 - August 2018
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        <div class="col">
        <Card class="experienceCard">
          <a href="https://beacn.org" class="link"><Card.Img class="cardImage" variant="top" src={beacn} /></a>
          <Card.Body>
            <Card.Title class="cardTitle">Beacn</Card.Title>
            <Card.Text class="cardText">
              Analyst
            </Card.Text>
            <Card.Text class="cardsubText">
              August 2017 - May 2018
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
      </div>
       </div>
    );
  }
 

export default Experience;

