import React from "react";

function DisplayPage(props){
    console.log("props value", props)
    return(
      <div>
        <p>Name: {props?.inputValues?.name}</p>
        <p>Age: {props?.inputValues?.age}</p>
        <p>Contact: {props?.inputValues?.contact}</p>
        <p>Email: {props?.inputValues?.email}</p>
      </div>

    )
  }

export default DisplayPage;