import Skills from "./Skills"
import Eduction from "./Education"
export default function MainSection () {
    return(
        <div className="mainSection">
            <div className="leftSide" >
                <Skills />
            </div>
            <div className="rightSide">
                <Eduction /> 
            </div>
        </div>
    )
}