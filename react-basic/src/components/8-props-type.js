import PropTypes from 'prop-types';

function PropsType(){
    const data = [
        {product:"Book"},
        {product:"Food",price:300},
        {price:150},
        {product:"Drink",price:150},
        {product:865,price:"eiei"}
    ]
    return (
        <div>
            {
                data.map((item)=>{
                    return (
                        <div>
                            <SubItem {...item}/>
                        </div>
                    );  
                })
            }
        </div>
    );
}
function SubItem({product,price}){
    return <p>product : {product} ,  price : {price}</p>;
}

SubItem.propTypes={
    product:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired
}


export default PropsType;