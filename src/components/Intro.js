import pfp from "./assets/images/pfp.png";
import "./Bar.css"

export default function Intro(){
    return (<div className="intro">
        <img src={pfp} alt="profile" className="pfp"></img>
        <p>Hi, I'm Nota</p>
    </div>)
}
