import React, { useState } from 'react'
import Stepper from "awesome-react-stepper";
import BasicDetails from './FormData/basicDetails';
import AditionalDetails from './FormData/additionalData';
import FinalDetails from './FormData/finalDetails';


const Course = () => {


  //next page indication
  const handleStepperNext = () => {
    console.log("next page");
  };

  //save data to firebase real-time database
  const onSubmit = async () => {

    //retrieving data from localstorage
    const savedData = JSON.parse(localStorage.getItem('basicDetails'));
    if(savedData){
    const { address, admission, affiliation, city, document, duration1, duration2, email, entrance, intakes, mobile, name, qualification, service, street, zip } = savedData;
    try {
      const res = await fetch("https://interview-1ed95-default-rtdb.firebaseio.com/UserData.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          address,
          admission,
          affiliation,
          city,
          document,
          duration1,
          duration2,
          email,
          entrance,
          intakes,
          mobile,
          name,
          qualification,
          service,
          street,
          zip
        })
      });
  
      if (res.ok) {
        alert("Data submitted successfully");
        localStorage.clear()
      } else {
        alert("Some error occurred");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Some error occurred",error);
    }
  }else{
    console.log("Data Is Empty")
  }
  };

  
  return (
    <div>
      {/* for steper used for forms */}
      <Stepper 
        showProgressBar={true}
        defaultActiveStep="1"
        submitBtn={<button className="stepperBtn">Submit</button>}
        continueBtn={<button className="stepperBtn">Next</button>}
        backBtn={<button className="stepperBtn">Back</button>}
        onContinue={handleStepperNext}
        onSubmit={onSubmit}
      >
        {/* form components */}
        <div>
          <BasicDetails 
          />
        </div>
        <div>
          <AditionalDetails />
        </div>
        <div>
          <FinalDetails />
        </div>
      </Stepper>
    </div>
  )
}

export default Course