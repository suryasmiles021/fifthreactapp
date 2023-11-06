import React from 'react';
import '../Styles/Navbar2.css';
import '../Styles/BodyCards.css';

const Simple = () => {
    return (
        <body>    
        <nav className="nav-bar">
          <a href="" className="nav-image"><img src="Images/Hola9logo.jpg" className="nv-image"/></a>
          <img src="Images/Linksimage.jpg" onclick="myFunction()" className="nav-button"/>
          <div className="myLinks">
              <a href="" className="nav-home" title="Home">Home</a>
              <a href="AboutUs/AboutUs.html" className="nav-aboutus" title="About us" >About us</a>
              <a href="ContactUs/ContacUS.html" className="nav-contactus" title="Contact us">Contact us</a>
              <button class="nav-admin-button" onclick="openForm();" title="Admin login">Admin login</button>
              <button class="nav-employee-button" onclick="openForm1();" title="Employee login">Employee login</button>
          </div>
    </nav>
  
        <div className="bodyCards">
          <div className="cards12">
            <a href="" className="body1-card1"><img src="Images/H-logo.jpg" className="card-image"/>
              <span className="insideCardtext0"><h2 className="insideCardtext1">HOLA9</h2><p className="insideCardtext2">Hola9 is a leading digital platform for local service businesses in India.</p></span></a>
            <a href="" className="body1-card1"><img src="Images/H-logo.jpg" className="card-image"/>
              <span className="insideCardtext0"><h2 className="insideCardtext1">HOLA9</h2><p className="insideCardtext2">Hola9 is a leading digital platform for local service businesses in India.</p></span></a>
          </div><div className="cards34">
            <a href="" className="body1-card1"><img src="Images/H-logo.jpg" className="card-image"/>
              <span className="insideCardtext0"><h2 className="insideCardtext1">HOLA9</h2><p className="insideCardtext2">Hola9 is a leading digital platform for local service businesses in India.</p></span></a>
            <a href="" className="body1-card1"><img src="Images/H-logo.jpg" className="card-image"/>
              <span className="insideCardtext0"><h2 className="insideCardtext1">HOLA9</h2><p className="insideCardtext2">Hola9 is a leading digital platform for local service businesses in India.</p></span></a>
        </div></div>
    </body>
    );
};

export default Simple;