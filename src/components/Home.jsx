import React from "react"

const Home = () => {
  return (
    <div className="home">
      <img
        className="firstImage"
        src="./firstIamge.png"
        alt="heroIamge1"
        style={{
          display: "block",
          margin: 0,
          width: "100%",
          marginTop: "120px",
        }}
      />
      <img
        className="secondImage"
        src="./secondImage.png"
        alt="heroIamge2"
        style={{
          display: "block",
          margin: 0,
          width: "100%",
        }}
      />
      <div
        style={{
          marginTop: "120px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Lato",
            fontWeight: 800,
            fontSize: "72px",
            lineHeight: "80px",
            marginBottom: "24px",
          }}
        >
          HOW IT WORKS?
        </div>
        <div
          style={{
            fontFamily: "Lato",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "24px",
          }}
        >
          Step by Step Guide
        </div>
      </div>
    </div>
  )
}

export default Home
