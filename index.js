// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";

const Checkbox = ({ fnClick, fnChange,w3,w4,w5, title = "", checked = false }) => (
  <label>
    <input
      onClick={e => {
        if (fnClick !== undefined) fnClick(e.target.checked);
      }}
      onChange={e => {
        if (fnChange !== undefined) fnChange(e.target.checked);
      }}

      onW3={e => {
        if (w3 !== undefined) w3(e.target.checked);
      }}

      onW4={e => {
        if (w4 !== undefined) w4(e.target.checked);
      }}

      onW5={e => {
        if (w5 !== undefined) w5(e.target.checked);
      }}
      type="checkbox"
      checked={checked}
    />
    {"  " + title}
  </label>
);

const Filtros = () => {
  const initialState = {
    click: false,
    change: false,
    w3:false,
    w4:false,
    w5:false
  };

  const reducer = (state, action) => ({ ...state, ...action });
  const [state, setState] = useReducer(reducer, initialState);

  const clearFilter = () => setState(initialState);
  return (
    <div className="App">
      <button onClick={() => clearFilter()}>Clear all</button>
      <br />
      <h3>Portugal</h3>
      <Checkbox
        title="Aasiya Jayavant"
        fnClick={v => setState({ click: v })}
        checked={state.click}
      />
      <br />
      <Checkbox
        title="Luvleen Lawrence"
        fnChange={v => setState({ change: v })}
        checked={state.change}
      />
      <br />
      <Checkbox
        title="Rey Mibourne"
        fnChange={v => setState({ w3: v })}
        checked={state.w3}
      />
      <br />
      <Checkbox
        title="Cayla Brister"
        fnChange={v => setState({ w4: v })}
        checked={state.w4}
      />
      <br />
      <h3>Marshall Island</h3>
        <Checkbox
        title="Aron Almazaz"
        fnChange={v => setState({ w5: v })}
        checked={state.w5}
      />
      <h3>Portugal</h3>
       {state.click ? "Aasiya Jayavant" : ""}
      <br />
      {state.change ? "Luvleen Lawrence" : ""}
      <br />
      {state.w3 ? "Rey Mibourne" : ""}
      <br />
      {state.w4 ? "Cayla Brister" : ""}
      <br />
      <h3>Marshal Island</h3>
      {state.w5 ? "Aron Almazaz" : ""}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Filtros />, rootElement);
