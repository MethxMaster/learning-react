
import './9-form.css';

function FormContent(){

    const updateName = (event)=>{
        console.log(event.target.value)
    }
    const updatePrice = (event)=>{
        console.log(event.target.value)
    }
    const submitData = ()=>{
        console.log('Submit')
    }

    return (
        <form>
            <div className="custom-form-control">
                <label>Product</label>
                <input id="textbox-product" type="text" placeholder="fill product name" onChange={updateName}></input>
            </div>
            <div className="custom-form-control">
                <label>Price</label>
                <input id="textbox-price" type="text" placeholder="price" onChange={updatePrice}></input>
            </div>
            <input td="form-submit" type="button" value="Submit" className="custom-btn" onClick={submitData}></input>
        </form>
    );
}

function FormEvent(){
    return (
        <div className='custom-container'>
            <FormContent/>
        </div>
    );
}

export default FormEvent;