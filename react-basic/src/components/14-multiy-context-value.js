import { useContext } from "react";
import { createContext } from "react";
import './13-contextAPI.css';

const dataContext = createContext()

function MainComponent2(){
    return (
        <dataContext.Provider value={
            {
                nickname:'MethxMaster',
                codename:'developer01'
            }
        }>
            <div className="main-component">
                <div>
                    <p>Main component</p>
                    <dataContext.Consumer>
                        {value=><p>data = <span className="data">{value.nickname}</span><span className="data2">{value.codename}</span></p>}
                    </dataContext.Consumer>
                </div>
                <div style={{display:'flex'}}>
                    <Sub1Component1/>
                    <Sub1Component2/>
                </div>
            </div>
        </dataContext.Provider>
    );
}

function Sub1Component1(){
    const value = useContext(dataContext)
    return (
        <div className="sub1">
            <p>sub-1 component-1</p>
            <p>data = <span className="data">{value.nickname}</span><span className="data2">{value.codename}</span></p>   

            <Sub2Component1/>
        </div>
    );
}
function Sub1Component2(){
    return (
        <div className="sub1">
            <p>sub-1 component-2</p>
            <Sub2Component2/>
        </div>
    );
}
function Sub2Component1(){
    const {nickname,codename} = useContext(dataContext)
    return (
        <div className="sub2">
            <p>sub-2 component-1</p>
            <p>data = <span className="data">{nickname}</span><span className="data2">{codename}</span></p>
        </div>
    );
}
function Sub2Component2(){
    const {nickname:item1,codename:item2} = useContext(dataContext)
    return (
        <div className="sub2">
            <p>sub-2 component-2</p>
            <p>data = <span className="data">{item1}</span><span className="data2">{item2}</span></p>
        </div>
    );
}

export default MainComponent2;