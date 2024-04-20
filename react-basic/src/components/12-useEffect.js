import { v4 as uuidv4 } from 'uuid';
import { useState,useEffect } from 'react';

//Title
const Title = ()=><h1 className="title">Cash record</h1>

//Form
function FormInput(props){

    console.log('Render Form component.')


    //Declare useState---------------
    const [item,setItem] = useState('');
    const [cost,setCost] = useState(0);
    const [formValid,setFormValid] = useState(false);
    // ------------------------------

    //Mananging filled data ----------
    const regisItem = (event)=>{
        setItem(event.target.value)
    }
    const regisCost = (event)=>{
        setCost(event.target.value)
    }
    const submitData = ()=>{
        const dataSubmit = {
            id: uuidv4(),
            item: item,
            cost: Number(cost)
        };
        setItem('');
        setCost(0);
        props.getData(dataSubmit) 
    }

    
    useEffect(()=>{
        const checkData = item.trim().length>0 && cost!=0
        setFormValid(checkData)

    },[item,cost])
    const btnValid = formValid ? "custom-btn" : "disabled-btn" ;

    // --------------------------------
    return (
        <form className="custom-container"> 
            <div className="custom-form-control">
                <label>Product</label>
                <input id="textbox-product" type="text" placeholder="fill product name" onChange={regisItem} value={item}></input>
            </div>
            <div className="custom-form-control">
                <label>Price</label>
                <input id="textbox-price" type="text" placeholder="price" onChange={regisCost} value={cost}></input>
            </div>
            <input td="form-submit" type="button" value="Submit" className={btnValid} disabled={!formValid} onClick={submitData}></input>
        </form>
    );
}

function DataRecord(props){
    const {item:DataFromApp} = props
    return (
        <ul className="item-list">
            {
                DataFromApp.map((item)=>{
                    return <EachItem {...item} key={item.id}/>
                })
            }
        </ul>
    );
}
function EachItem(props){
    const status = props.cost>0 ? "income" : "outcome" ;
    const symbol = props.cost>0 ? "+" : "-" ;
    return (
        <li className={status}>
            <div>{props.item}</div><div>{symbol}{Math.abs(props.cost)}</div>
        </li>
    );
}

function UseEffectExam(){

    const initialData = []

    const [currentData,setData] = useState(initialData);

    const updateData = (newData)=>{
        console.log(newData)
        setData([newData,...currentData])
    }
    
    return (
        <div className="container">
            <Title/>
            <FormInput getData={updateData}/>
            <DataRecord item={currentData}/>
        </div>
    );
}

export default UseEffectExam;
