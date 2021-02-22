import React from 'react';
import App from '../App';
import Greet from './Greet';
import Welcome from './Welcome';

function DC_Comics() {
    /* const buttonStyles = ({
        outline: none,
        borderRadius: 2+"px",
        cursor: pointer
      });
      const [characterStyles, setcharacterStyles] = useState("");
      let newColor = () => {
        setcharacterStyles({color:fff});
      } */
    return (
        <div className="App">
            <Welcome Name="Bruce" heroName="Batman"/* style={characterStyles} */>
                {/* <h1 style={characterStyles}>Hello Batman</h1> */}
            </Welcome>
            <Welcome Name="Clark" heroName="Superman"/* style={characterStyles} *//>
            <button /* onClick={newColor}
            style={buttonStyles} */
            >Change color</button>
        </div>
    )
}

export default DC_Comics;
