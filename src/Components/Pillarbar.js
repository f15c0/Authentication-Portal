import { withTheme } from "styled-components";
import Pillarnav from "./Nav";

const Pillarbar = () => {

//Pillar Collors:

//#740707
// #acabac

    const pillar="#740707";
    const options= {
        backgroudColor:"purple",
        fontSize:"50px",
        color:pillar
            
    }
    return (

        <div>
            <h1 style={options}>
                Pillar
            </h1>
            <Pillarnav></Pillarnav>
        </div>
     );
}
 
export default Pillarbar;