"use strict";

const form = document.querySelector("form");

//This usecase give you empty value, but here we want the value after form submit
// const height = document.querySelector("#height").value;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //this give you value in string to change wrap all in parenthesis and use parseINT
  //   const height = document.querySelector("#height").value;

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.textContent = `Please Give a Valid Height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.textContent = `Please Give a Valid Weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2); // toFixed(2); 2 value after decimal
    //show the result
    // result.textContent = `Your BMI is ${bmi}`;

    if (bmi <= 18.6) {
      result.textContent = `Your BMI is ${bmi} and you are underweight 🙁`;
    } else if (bmi > 18.6 && bmi <= 24.9) {
      result.textContent = `Congrats!😊 Your BMI is ${bmi} and you are Healthy`;
    } else {
      result.textContent = `Your BMI is ${bmi} and you are overweight 😟`;
    }
  }
});
