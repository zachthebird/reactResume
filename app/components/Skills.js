import React from "react";
import { $ }from 'jquery';  
  
const Skills = props => (
    <div className='indigo lighten-2'>
    <div className='container'>
        <h1 className='text-center white-text'>Skills</h1>
        <div className="skillbar clearfix " data-percent="90%">
          <div className="skillbar-title" style={styles.bar1.title}><span>HTML5</span></div>
          <div className="skillbar-bar perc1" style={styles.bar1.bar}></div>
          <div className="skill-bar-percent">90%</div>
        </div> 

        <div className="skillbar clearfix " data-percent="25%">
          <div className="skillbar-title" style={styles.bar2.title}><span>CSS3</span></div>
          <div className="skillbar-bar perc2" style={styles.bar2.bar}></div>
          <div className="skill-bar-percent">85%</div>
        </div> 

        <div className="skillbar clearfix " data-percent="50%">
          <div className="skillbar-title" style={styles.bar3.title}><span>jQuery</span></div>
          <div className="skillbar-bar perc3" style={styles.bar3.bar}></div>
          <div className="skill-bar-percent">90%</div>
        </div> 

        <div className="skillbar clearfix " data-percent="40%">
          <div className="skillbar-title" style={styles.bar4.title}><span>PHP</span></div>
          <div className="skillbar-bar perc4" style={styles.bar4.bar}></div>
          <div className="skill-bar-percent">50%</div>
        </div> 

        <div className="skillbar clearfix " data-percent="75%">
          <div className="skillbar-title" style={styles.bar5.title}><span>ReactJS</span></div>
          <div className="skillbar-bar perc5" style={styles.bar5.bar}></div>
          <div className="skill-bar-percent">75%</div>
        </div> 

        <div className="skillbar clearfix " data-percent="100%">
          <div className="skillbar-title" style={styles.bar6.title}><span>JavaScript</span></div>
          <div className="skillbar-bar perc6" style={styles.bar6.bar}></div>
          <div className="skill-bar-percent">95%</div>
        </div> 

        <div className="skillbar clearfix " data-percent="70%">
          <div className="skillbar-title" style={styles.bar7.title}><span>Node</span></div>
          <div className="skillbar-bar perc7" style={styles.bar7.bar}></div>
          <div className="skill-bar-percent">95%</div>
        </div> 
    </div>
    </div>
);

const styles = {
  imgStyle: {
    width: '100%',
    margin: 10
  },
  bar1: {
    title: {
      background: '#d35400'
    },
    bar: {
      background: "#e67e22"
    }
  },
  bar2: {
    title: {
      background: '#2980b9'
    },
    bar: {
      background: '#3498db'
    }
  },
  bar3: {
    title: {
      background: '#2c3e50'
    },
    bar: {
      background: '#2c3e50'
    }
  },
  bar4: {
    title: {
      background: '#46465e'
    },
    bar: {
      background: '#5a68a5'
    }
  },
  bar5: {
    title: {
      background: '#333333'
    },
    bar: {
      background: '#525252'
    }
  },
  bar6: {
    title: {
      background: '#27ae60'
    },
    bar: {
      background: '#2ecc71'
    }
  },
  bar7: {
    title: {
      background: '#124e8c'
    },
    bar: {
      background: '#4288d0'
    }
  }
};

// Exporting this component as the default (only) export
export default Skills;