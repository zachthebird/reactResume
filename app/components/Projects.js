import React from "react";
import { $ }from 'jquery';  
  
const Projects = props => (
    <div className='amber'>
        <div className='container'>
            <h1 className='text-center white-text'>Projects</h1>

            <div className="row">
                <div className="col s6 m6">
                    <div className="card small">
                        <div className="card-image">
                            <img className='responsive-img' src="./hangman.png" />
                        </div>
                        <div className="card-content">
                            <p>This is one of my first projects: an early attempt at a hangman game using javascript, html, and css. Not too pretty but it gets the job done.</p>
                        </div>
                        <div className="card-action">
                            <img className='hLogo' src='herokulogo.png' /><a href="https://sleepy-sierra-89675.herokuapp.com/">DEPLOYMENT</a>
                            <img className='ghLogo' src='ghlogo1.png'/><a href='https://github.com/zachthebird/Hangman-Game/tree/master'>GITHUB</a>
                        </div>
                    </div>
                </div>
                <div className="col s6 m6">
                    <div className="card small">
                        <div className="card-image">
                            <img className='responsive-img' src="./pogClicker.png" />
                        </div>
                        <div className="card-content">
                            <p>This is another early project. Created an RPG-style clicker game exhibiting html, css, javascript, and jQuery.</p>
                        </div>
                        <div className="card-action">
                            <img className='hLogo' src='herokulogo.png' /><a href="https://salty-waters-69675.herokuapp.com/">DEPLOYMENT</a>
                            <img className='ghLogo' src='ghlogo1.png'/><a href='https://github.com/zachthebird/RPG-Game'>GITHUB</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s6 m6">
                    <div className="card small">
                        <div className="card-image">
                            <img className='responsive-img' src="./LiriShot.png" />
                        </div>
                        <div className="card-content">
                            <p>A foray into node. This is a command line application that can hit a few different APIs using AJAX requests to return the requested information. </p>
                        </div>
                        <div className="card-action">
                            <img className='hLogo' src='ghlogo1.png'/><a href='https://github.com/zachthebird/liri-node-app'>GITHUB</a>
                        </div>
                    </div>
                </div>
                <div className="col s6 m6">
                    <div className="card small">
                        <div className="card-image">
                            <img className='responsive-img' src="./trainscheduler.png" />
                        </div>
                        <div className="card-content">
                            <p>This is an application that uses google's relational db: firebase. The app records the times of real or fictional trains that the user may input and draws on MomentJS to indicate when each train is arriving next.</p>
                        </div>
                        <div className="card-action">
                            <img className='hLogo' src='herokulogo.png' /><a href="https://zachthebird.github.io/TrainScheduler/">DEPLOYMENT</a>
                            <img className='ghLogo' src='ghlogo1.png'/><a href='https://github.com/zachthebird/TrainScheduler'>GITHUB</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s6 m6">
                    <div className="card small">
                        <div className="card-image">
                            <img className='responsive-img' src="./friendfinder1.png" />
                        </div>
                        <div className="card-content">
                            <p>Here, I am using Express.js to create a web app that pairs users who have similar personality test results.</p>
                        </div>
                        <div className="card-action">
                            <img className='hLogo' src='herokulogo.png' /><a href="https://intense-mesa-54549.herokuapp.com">DEPLOYMENT</a>
                            <img className='ghLogo' src='ghlogo1.png'/><a href='https://github.com/zachthebird/FriendFinder'>GITHUB</a>
                        </div>
                    </div>
                </div>
                <div className="col s6 m6">
                    <div className="card small">
                        <div className="card-image">
                            <img className='responsive-img' src="./reactScraper.png" />
                        </div>
                        <div className="card-content">
                            <p>A web app that lets users leave comments on the latest news. However, instead of writing my own articles I've scraped the web using cheerio and mongo.</p>
                        </div>
                        <div className="card-action">
                            <img className='hLogo' src='herokulogo.png' /><a href="https://fast-wave-16514.herokuapp.com/">DEPLOYMENT</a>
                            <img className='ghLogo' src='ghlogo1.png'/><a href='https://github.com/zachthebird/mongooseHW'>GITHUB</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
);

const styles = {
  imgStyle: {
    width: '100%',
    margin: 10
  }
};

// Exporting this component as the default (only) export
export default Projects;