import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import external component
import ExternalComponent from './components/1-exam-external-component';
import ReactJSXFormat from './components/2-react-jsx';

// Default from creating react ------------------------------------------------
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/
//--------------------------------------------------------------------------------




//Example 1 :  set HTML(JSX) and render in Virtual DOM (ReactDOM) ----------------------
/*
const data = (
  <h1>Test render ReactDOM</h1>
)
/      
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <h1>Test render ReactDOM</h1>
);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  data
);
*/
// --------------------------------------------------------------------------------------


// Function component -------------------------------------------------------------------------------------------------
//
//First dunction name "must" be uppercase!!!    ->    if you use lowercase the program will understand it's a normal function
/*
function Data(){
  return <h1>funnction component</h1>;

}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Data/>)
*/
// --------------------------------------------------------------------------------------------------------------------




// Class component -------------------------------------------------------------------------------------------------
//
//First dunction name "must" be uppercase!!!    ->    if you use lowercase the program will understand it's a normal function
/*
class Data extends React.Component{
  render(){
    return <h1>funnction component</h1>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Data/>)
*/
// --------------------------------------------------------------------------------------------------------------------



// External component -----------------------------------------------------
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ExternalComponent/>);
*/
//--------------------------------------------------------------------------



// React JSX format ------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ReactJSXFormat/>);

//------------------------------












// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
