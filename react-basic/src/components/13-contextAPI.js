import { useContext } from "react";
import { createContext } from "react";
import './13-contextAPI.css';

const dataContext = createContext()

function MainComponent(){
    return (
        <dataContext.Provider value={"MethxMaster"}>
            <div className="main-component">
                <div>
                    <p>Main component</p>
                    <dataContext.Consumer>
                        {value=><p>data = <span className="data">{value}</span></p>}
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
    const value = useContext(dataContext) /* way 2 : Use react hook (useContext) */
    return (
        <div className="sub1">
            <p>sub-1 component-1</p>
            {/* way 2 : Use react hook (useContext) */}
            <p>data = <span className="data">{value}</span></p>     

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
    return (
        <div className="sub2">
            <p>sub-2 component-1</p>
            {/*  way 1 : Use data context provider/consumer */}
            <dataContext.Consumer>
                {value=><p>data = <span className="data">{value}</span></p>}
            </dataContext.Consumer>
        </div>
    );
}
function Sub2Component2(){
    return (
        <div className="sub2">
            <p>sub-2 component-2</p>
            <dataContext.Consumer>
                {value=><p>data = <span className="data">{value}</span></p>}
            </dataContext.Consumer>
        </div>
    );
}

export default MainComponent;