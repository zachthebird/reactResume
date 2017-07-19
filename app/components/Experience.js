import React from "react";
import { $ }from 'jquery';  
  
const Experience = props => (
    <div className='amber'>
    <div className='container'>
        <div className='row'>
            <h1 className=' white-text text-darken-2'>Experience</h1>
        </div>
        <div className="divider"></div>
        <div className="section">
            <h5 className='white-text col-s10'>LawnStarter</h5>
            <p className='white-text col-s2 push-s10 right-align marginTop'>May 15' - Jan 17'</p>
        </div>
        <div className="divider"></div>
        <div className="section">
            <h5 className='white-text col-s10'>BirdBriefs</h5>
            <p className='white-text col-s2 push-s10 right-align marginTop'>May 14' - Present</p>
        </div>
        <div className="divider"></div>
        <div className="section">
            <h5 className='white-text col-s10'>SpareFoot</h5>
            <p className='white-text col-s2 push-s10 right-align marginTop'>Aug 13' - May 15'</p>
        </div>
        <div className="divider"></div>
        <div className="section">
            <h5 className='white-text col-s10'>AXA Advisors</h5>
            <p className='white-text col-s2 push-s10 right-align marginTop'>May 12' - Aug 13'</p>
        </div>
        <div className="row">
            <div className='center-align'><img style={styles.timeStyle} src={styles.timeStyle.url} />></div>
        </div>
    </div>
    </div>
);

const styles = {
  timeStyle: {
    url: './expGraph.png',
    padding: 30
  },
  jobTit: {
      textDecorationLine: 'underline'
  }
};

// Exporting this component as the default (only) export
export default Experience;