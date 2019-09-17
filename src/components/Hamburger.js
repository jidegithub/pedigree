import React, {useState} from 'react'
import Hamburger from 'react-hamburger-menu';

export default function Navpill() {
    const [open, setOpen] = useState(false)
    const [display, setDisplay] = useState(false)

    const handleClick = () =>{
        setOpen(!open)
        setDisplay(!display)
    } 

   let viewState = '';
    viewState += (display === !false ) ? 'unhide' : 'hidden'

    return (
        <div className="hamburger">
            <Hamburger 
                isOpen={!open}
                menuClicked={handleClick}
                width={18}
                height={15}
                strokeWidth={2}
                rotate={0}
                color='black'
                borderRadius={0}
                animationDuration={0.2}
            />
            <ul className={viewState}>
                <li>home</li>
                <li>something else</li>
                <li>another</li>
            </ul>      
        </div>
    )
}


// const NavPill = () => {
//     return (
//         <div>
//             <nav class="cd-stretchy-nav">
//                 <a class="cd-nav-trigger" href="#0">
//                     Menu
//                     <span aria-hidden="true"></span>
//                 </a>

//                 <ul>
//                     <li><a href="#0" class="active"><span>Home</span></a></li>
//                     <li><a href="#0"><span>Portfolio</span></a></li>
//                     <li><a href="#0"><span>Services</span></a></li>
//                     <li><a href="#0"><span>Store</span></a></li>
//                     <li><a href="#0"><span>Contact</span></a></li>
//                 </ul>
//                 <span aria-hidden="true" class="stretchy-nav-bg"></span>
//             </nav>
//         </div>
//     )
// }

// export default NavPill;
