import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

//Title
const Title = ()=><h1 className="title">Cash record</h1>

//Form
function FormInput(props){

    //Declare useState---------------
    const [item,setItem] = useState('')
    const [cost,setCost] = useState(0)
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
            <input td="form-submit" type="button" value="Submit" className="custom-btn" onClick={submitData}></input>
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
    return (
        <li>
            <div>{props.item}</div><div>{props.cost}</div>
        </li>
    );
}

function AppExample1(){

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

export default AppExample1;
