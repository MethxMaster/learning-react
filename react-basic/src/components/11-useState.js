
import { useState } from 'react';
import './9-form.css';

function FormContent(){

    //Use state decalration
    const [product,setProduct] = useState('');
    const [price,setPrice] = useState(0);

    const updateName = (event)=>{
        setProduct(event.target.value)
        console.log("useState hook : ", product)
    }
    const updatePrice = (event)=>{
        setPrice(event.target.value)
        console.log("useState hook : ", price)
    }
    const submitData = ()=>{
        const dataSubmit = {
            productItem: product,
            priceItem: Number(price)    //Convert to number because useState contain string and give the string value
        }
        setProduct('')
        setPrice(0)
        console.log(dataSubmit)
    }

    return (
        <form>
            <div className="custom-form-control">
                <label>Product</label>
                <input id="textbox-product" type="text" placeholder="fill product name" onChange={updateName} value={product}></input>
            </div>
            <div className="custom-form-control">
                <label>Price</label>
                <input id="textbox-price" type="text" placeholder="price" onChange={updatePrice} value={price}></input>
            </div>
            <input td="form-submit" type="button" value="Submit" className="custom-btn" onClick={submitData}></input>
        </form>
    );
}

function UseState(){
    return (
        <div className='custom-container'>
            <FormContent/>
        </div>
    );
}

export default UseState;