

import './9-form.css';

function FormContent(){
    return (
        <form>
            <div className="custom-form-control">
                <label for="product-box">Product</label>
                <input id="textbox-product" type="text" name="product-box" placeholder="fill product name"></input>
            </div>
            <div className="custom-form-control">
                <label for="price-box">Price</label>
                <input id="textbox-price" type="text" name ="price-box" placeholder="price"></input>
            </div>
            <input td="form-submit" type="button" value="Submit" className="custom-btn"></input>
        </form>
    );
}

function FormOutput(){
    return (
        <div className='custom-container'>
            <FormContent/>
        </div>
    );
}

export default FormOutput;