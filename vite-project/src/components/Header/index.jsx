import React from 'react'
import logo from '../../assets/img/kfcLogo.492728c6.svg'
import './header.css';
import Menu from '../Menu'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
    <div className="headerWrapper">
       <div className="logo">
        <Link to="/"><img src={logo} alt="" /></Link>
      </div>
      <div className="auth-link">
        <ul>
          <li><Link to=""><i class="bi bi-geo-alt-fill"></i> Store Locator</Link></li>
          <li><Link to="/login"><i class="bi bi-person-fill"></i> Signin/Register</Link></li>
          <li><Link to="">MY Account</Link></li>
          <li><Link to="">LOGOUT</Link></li>
        </ul>
      </div>
    </div>
    <Menu/>
    </>
    )
}

export default Header





// import React from 'react';
// import logo from '../../assets/img/kfcLogo.492728c6.svg';
// import './header.css';
// import Menu from '../Menu';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <>
//       <div className="headerWrapper">
//         <div className="logo">
//           <Link to="/Home">
//             <img src={logo} alt="" />
//           </Link>
//         </div>
//         <div className="auth-link">
//           <ul>
//             <li>
//               <Link to="/"><i className="bi bi-geo-alt-fill"></i> Store Locator</Link>
//             </li>
//             <li>
//               <Link to="/login"><i className="bi bi-person-fill"></i> Signin/Register</Link>
//             </li>
//             <li>
//               <Link to="/"><i className="bi bi-person"></i> MY Account</Link>
//             </li>
//             <li>
//               <Link to="/"><i className="bi bi-box-arrow-right"></i> LOGOUT</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <Menu />
//     </>
//   );
// }

// export default Header;
