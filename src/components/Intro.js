import pfp from "./assets/images/pfp.png";
import "./Bar.css"

function Intro(){
    return (<div className="intro">
        <img src={pfp} alt="profile" className="pfp"></img>
        <p>Hi, I'm Nota</p>
    </div>)
}

export default Intro