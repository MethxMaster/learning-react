import { v4 as uuidv4 } from 'uuid';
import { useState,useEffect,useContext,createContext } from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';


const dataContext = createContext();

//Title
const Title = ()=><h1 className="title">Cash record</h1>

//Form
function FormInput(props){

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
    function formatNumber(num){
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    const status = props.cost>0 ? "income" : "outcome" ;
    const symbol = props.cost>0 ? "+" : "-" ;
    const colorConfig = props.cost>0 ? "plus" : "minus" ;
    return (
        <li className={status}>
            <div>{props.item}</div><div className={colorConfig}>{symbol}{formatNumber(Math.abs(props.cost))}</div>
        </li>
    );
}
function Report(){
    const {income,outcome} = useContext(dataContext)
    const formatNumber=(num)=>{
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    return (
        <div className='report-container'>
            <p>Total : {formatNumber(income-outcome)}</p>
            <div className='income-frame'>
                <p>Income</p>
                <p className='plus'>{formatNumber(income)}</p>
            </div>
            <div className='outcome-frame'>
                <p>outcome</p>
                <p className='minus'>{formatNumber(outcome)}</p>
            </div>
        </div>
    );
}

function UseEffectExam(){
    /*
    const initialData = [
        {id:1,item:"Book",cost:-259},
        {id:2,item:"Food",cost:3000},
        {id:3,item:"Shirt",cost:-150},
        {id:4,item:"Drink",cost:150},
        {id:5,item:"Shoes",cost:299}
    ]
    */
    
    const [currentData,setData] = useState([]);
    const [income,setIncome] = useState(0);
    const [outcome,setOutcome] = useState(0);

    const updateData = (newData)=>{
        setData([newData,...currentData])
    }
    
    useEffect(()=>{
        const onlyCost = currentData.map((eachCost)=>eachCost.cost)
        const calIncome = onlyCost.filter((e)=>e>0).reduce((total,e)=>total+=e,0)
        const calOutcome = onlyCost.filter((e)=>e<0).reduce((total,e)=>total+=e,0)*-1
        setIncome(calIncome)
        setOutcome(calOutcome)
    },[currentData,income,outcome])


    return (
        <dataContext.Provider value={
            {
                income,outcome
            }
        }>
            <div className="container">
                <Title/>
                <div>
                    <Router>
                        <ul className='menu-container'>
                            <li className='menu-list'>
                                <Link to="/">Report</Link>
                            </li>
                            <li className='menu-list'>
                                <Link to="/record">Record</Link>
                            </li>
                        </ul>
                        <Routes>
                            <Route path="/" element={<Report/>}></Route>
                            <Route path="/record" element={[<FormInput getData={updateData}/>,<DataRecord item={currentData}/>]}></Route>
                        </Routes>
                    </Router>
                </div>
            </div>
        </dataContext.Provider>
    );
}

export default UseEffectExam;
