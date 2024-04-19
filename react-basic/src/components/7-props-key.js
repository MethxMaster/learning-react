
import { v4 as uuidv4 } from 'uuid';

// Own declare id ----------------------------------------------------------------------
/*
function PropsKey(){
    const productTest = [
        {id:1,product:"Book",price:259},
        {id:2,product:"Food",price:300},
        {id:3,product:"Shirt",price:150},
        {id:4,product:"Drink",price:150},
        {id:5,product:"Shoes",price:299}
    ]
    return (
        <div>
            {
                productTest.map((objInArray)=>{
                    return (
                        <SubItem {...objInArray} key={objInArray.id}/>
                    );
                })
            }
        </div>
    );
}
function SubItem(props){
    return (
        <div>
            <p>product : {props.product} ,  price : {props.price}</p>
        </div>
    );
}
*/

// Use UUID library --------------------------------------------------------------------
function PropsKey(){
    console.log(uuidv4());
    const data = [
        {product:"Book",price:259},
        {product:"Food",price:300},
        {product:"Shirt",price:150},
        {product:"Drink",price:150},
        {product:"Shoes",price:299}
    ]
    return (
        <div>
            {
                data.map((dataInArray)=>{
                        let id = uuidv4();
                        return  <SubItem {...dataInArray} key={id}/>
                    }
                )
            }
        </div>
    );
}
const SubItem = (props)=>{
    return (
        <p>
            product : {props.product} ,  price : {props.price}
        </p>
    );
}

export default PropsKey;