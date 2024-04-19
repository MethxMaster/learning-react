import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Title = ()=><div className="title">Cash record</div>

const ListGroup = ()=>{
    const data = [
        {product:"Book",price:259},
        {product:"Food",price:300},
        {product:"Shirt",price:150},
        {product:"Drink",price:150},
        {product:"Shoes",price:299}
    ];
    return (
        <ul className="item-list">
            {
                data.map((objItem)=>{
                    return <ItemList {...objItem} key={uuidv4()}/>;
                })
            }
        </ul>
    );
}

const ItemList = (props)=>{
    return (
        <li>
            <div>{props.product}</div><div>{props.price}</div>
        </li>
    );
}

ItemList.propTypes={
    product:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired
}


function ProjectOutput(){
    return (
        <div>
            <div className="container">
                <Title/>
                <ListGroup/>
            </div>

        </div>
    );
}

export default ProjectOutput;