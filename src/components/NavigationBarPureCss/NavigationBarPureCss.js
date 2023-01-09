import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavigationBarPureCss.module.css';

const NavigationBarPureCss = () => {
  return (
    <nav class={styles.navbar}>
      <div class={styles.container}>
        {/* <span id="toggle-nav" onclick="toggleNav()">
          <i class="fa fa-bars"></i>
        </span> */}
        <ul id={styles.navlist}>
          <li><i class="fa fa-envelope"></i>
            <h6>Ask a Question</h6>
          </li>
          <li><i class="fa fa-fire"></i>
            <h6>Trending</h6>
          </li>
          <li><i class="fa fa-question-circle"></i>
            <h6>My Searches</h6>
          </li>
          <li><i class="fa fa-star"></i>
            <h6>Awards</h6>
          </li>
          <li style={{ position: "relative", top: "-10px", fontWeight: "bold", margin: "8px" }}>
            <span>
              <i class="fa fa-fire" style={{fontSize: "20px",color: "orange",paddingRight: "3px"}}></i>3/3</span>
          </li>
          <li style={{ position: "relative", top: "-10px", margin: "7px" }}>
            <span>
              <i class="fa fa-bell"
                style={{fontSize: "20px"}}></i></span></li>
          <li style={{position: "relative",top: "-10px"}}>
            <div class={styles.username}>
              <div class={styles.dropdown}>
                <div class={styles.icon} class={styles.dropbtn}>
                  <div id={styles.myDropdown} class={styles.dropdowncontent}>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <h4>Mukul Kale</h4>
            <div class="select">
              <select>
                <option>Seeker</option>
                <option>Expert</option>
              </select>
            </div>
          </li>
          <li>
            <h4>Group</h4>
            <div class={styles.select}>
              <select>
                <option>Alpha</option>
                <option>GTech</option>
              </select>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )

};

NavigationBarPureCss.propTypes = {};

NavigationBarPureCss.defaultProps = {};

export default NavigationBarPureCss;

// < !DOCTYPE html >
//   <html>
//     <head>
//       <meta charset="utf-8">
//         <meta name="viewport" content="width=device-width">
//           <title>replit</title>
//           <link href="style.css" rel="stylesheet" type="text/css" />

//                 <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;1,200&display=swap"
//                   rel="stylesheet">
//                   <link rel="preconnect" href="https://fonts.googleapis.com">
//                     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//                       <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet">
//                       </head>
//                       <body>

//                         <script src="script.js">
//                           var nav = document.getElementById('myDropdown');

//                           function myFunction() {
//                             document.getElementById("myDropdown").classList.toggle("show");
//       }

//                           function toggleNav() {

//         if (nav.style.display === "")
//                           nav.style.display = "block";

//                           else
//                           nav.style.display = "";
//       }


//                           function windowResizeHandler() {
//         if (screen.width > 500)
//                           nav.style.display = "";
//       }

//                           window.onclick = function (event) {
//         if (!event.target.matches('.dropbtn')) {
//           var dropdowns = document.getElementsByClassName("dropdown-content");
//                           var i;
//                           for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//                           if (openDropdown.classList.contains('show')) {
//                             openDropdown.classList.remove('show');
//             }
//           }
//         }
//       }

//                           window.addEventListener("resize", windowResizeHandler);
//                         </script>

//                         <!--
//                         This script places a badge on your repl's full-browser view back to your repl's cover
//                         page. Try various colors for the theme: dark, light, red, orange, yellow, lime, green,
//                         teal, blue, blurple, magenta, pink!
//   -->
//                         <script src="https://replit.com/public/js/replit-badge.js" theme="blue" defer></script>
//                       </body>

//                     </html>
