import Skills from "./Skills"
import Eduction from "./Education"
import Experience from "./Experience"
export default function MainSection () {
    return(
        <div className="mainSection">
            <div className="leftSide" >
                <Skills />
                <Eduction /> 
            </div>
            <div className="rightSide">
                < Experience />
            </div>
        </div>
    )
}