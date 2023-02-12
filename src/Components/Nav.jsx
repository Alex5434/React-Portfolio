import {React,useEffect} from 'react'
import img from '../images/logo-removebg-preview.png'
import { Icon } from '@iconify/react';

const Nav = () => {

    let navbar = document.querySelector("nav");
    let home = document.querySelector(".back")

      useEffect(() => {
        console.log("ih");
      }, window.scrollY)

    window.addEventListener("scroll", ()=> {
        var scrollTop =window.scrollY;
        let height = home.offsetHeight;
        height-scrollTop<60?navbar.classList.add("act"):navbar.classList.remove("act");
    })

    const HandleToggle = ()=>{
      
    }
      

      return (
    <nav>
        <section>
    <img src={img} alt="logo"/>
    <div className="logo">
      <div className="bor">
        <a href="https://twitter.com/Alexand06656824">
          <Icon className='ico' icon="mdi:twitter"/>
        </a>
      </div>
      <div className="bor">
        <a href="https://www.linkedin.com/in/alexander-e-005a16202/">
        <Icon className="ico" icon="akar-icons:linkedin-fill" />
      </a>
      </div>
      <div className="bor">
        <a href="https://github.com/Alex5434">
        <Icon className="ico git" icon="bxl:github" />
      </a>
      </div>
    </div>
    </section>
    <ul className="list">
      
      <li>
        <a href="#home"  className="active">Home</a>
      </li>
      
      <li>
        <a href="#about" >About</a>
      </li>
      
      <li>
        <a href="#projects" >Projects</a>
      </li>
      
      <li>
        <a href="#skills" >Skills</a>
      </li>
      
      <li>
        <a href="#contact" >Contact</a>
      </li>
    </ul>
    <button className="men-btn" onClick={HandleToggle}>
    <Icon className="menu-btn" icon="bytesize:menu" />
  </button>
    </nav>
  )
}

export default Nav