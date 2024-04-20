import { useState,useReducer } from "react";


function UseReducerExam(){

    const [count,setCount] = useState(0);
    const reducer = (state,action)=>{
        switch(action.type){
            case "ADD" :
                return state + 1*action.payload;
            case "SUB" :
                return state - 1*action.payload;
            case "CLR" :
                return 0;
        }
    }
    const [result,dispatch] = useReducer(reducer,count)

    return (
        <div>
            <h1>{result}</h1>
            <button onClick={()=>dispatch({type:"ADD",payload:10})}>ADD</button>
            <button onClick={()=>dispatch({type:"SUB",payload:5})}>SUB</button>
            <button onClick={()=>dispatch({type:"CLR"})}>CLR</button>
        </div>
    );
}

export default UseReducerExam;