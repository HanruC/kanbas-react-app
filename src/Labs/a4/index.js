import React from "react";
import ReduxExamples from "./ReduxExamples";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
function Assignment4() {
  function sayHello() {
    alert("Hello");
  }

  return (
    <>
      <h1>Assignment 4</h1>
      <ReduxExamples />
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} />
      <EventObject />
      <Counter />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
    </>
  );
}
export default Assignment4;