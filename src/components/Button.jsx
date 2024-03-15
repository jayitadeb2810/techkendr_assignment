import React from "react"
import EastIcon from "@mui/icons-material/East"
const Button = ({ text }) => {
  return (
    <div className="herobutton">
      <div className=" ">{text}</div>
      <EastIcon
        sx={{
          fontSize: "18px",
          marginLeft: "20px",
        }}
      />
    </div>
  )
}

export default Button
