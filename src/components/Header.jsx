import FilterBar from "./FilterBar";
import { Link } from "react-router-dom";

export default function Header() {

    return (
        <div className="header">
            {/*<img className='backgroundImg' src="/images/triangle.svg" />*/}
            <div className="headerContent">
                <Link to={'/'}><h1>devjobs</h1></Link>
                <div className="lightDark">
                    <div onClick={()=> document.body.classList.toggle("dark-theme")} className="themeBtn">
                        <span></span>
                    </div>
                </div>
            </div>
            <FilterBar />
        </div>
    )
}