import React from "react"
import Button from "./Button.jsx"

const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
        <div className="logo">
          <span style={{ fontWeight: 800 }}>
            XYZ
          </span>{" "}
          INDUSTRIES
        </div>
        <div className=" navmanu">
          <ul className="navmanulist">
            <li>Home</li>
            <li>About Us</li>
            <li>Property</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="singButtons">
          <div className="signup">Sign Up</div>
          <div className="signin"> Sign In</div>
        </div>
      </div>
      <div className="heroSection">
        <div className="heroCapitalWriting">
          <div>CONNECTING DREAMS TO REALITY</div>
          <div
            style={{
              color: "#2C8FB5",
              fontWeight: 700,
              fontStyle: "italic",
            }}
          >
            YOUR PREMIER
          </div>
          <div>REAL ESTATE MARKETPLACE</div>
        </div>
        <div className="heroSmaollWriting">
          Where every search ends with a home
        </div>
        <div className="heroButtons">
          <Button text={"Find Your Home"} />
          <Button text={"List Your Property"} />
        </div>
      </div>
    </div>
  )
}

export default Header
