import React from 'react'
import './HomeScreen.css'
import SearchIcon from '../../assets/search.svg'
import Home from '../../assets/home button.svg'
import Facebook from '../../assets/facebook 2.svg'
import Google from '../../assets/google.svg'
import UpDown from '../../assets/up__down.svg'
import Lamp from '../../assets/lamp.PNG'
import ImageArrow from '../../assets/image arrow.svg'
import Arrows from '../../assets/arrows__change.svg'

function HomeScreen() {
    return (
        <div>
            <div className="nav">
            <div className="logo">
                LightHome
            </div>
            <div className="pdf">
            <li><a href="#">Download as PDF</a></li>
            </div>
            <div className="hg">
            <li><a href="#">Home</a></li>
            <div className="gal">
            <li><a href="#">Gallery</a></li>
            </div>
            </div>
            <div className="icons">
                <div className="icon1">
            <input type="image" src={SearchIcon}/>
            </div>
            <div className="icon2">
            <input type="image" src={Home}/>
            </div>
            </div>
            <div className="show">
                Show Room
            </div>
            <div className="cool">
                Cool with Beautiful colors
            </div>
            <div className="lamparrow">
            <img src={ImageArrow}/>

            </div>
            <div className="mainimage">
                
                <img src={Lamp}/>
            </div>
            <div className="arrows">
                <img src={Arrows}/>
            </div>

        </div> 
        <div className="footer">
            <input type="image" src={Google}/>
            <div className="footleft">
            <input type="image" src={Facebook}/>
            </div>
            <div className="halo">
                Halogen
            </div>
        <div className="footright">
        <input type="image" src={UpDown} />

        </div>
        </div>
        </div>
    )
}

export default HomeScreen
