//call external CSS file
import './5-jsx-style.css';
import '../bootstrap-5.3.3-dist/css/bootstrap.min.css';

//Inline case
const InlineCase1 = ()=>{
    return <p style={{color:"red",backgroundColor:"yellow"}}>Inline1 Case</p>;
}

//Inline case but use variable
const configStyle = {color:"blue",backgroundColor:"orange"}
const InlineCase2 = ()=>{
    return <p style={configStyle}>Inline2 Case</p>;
}

// Call CSS file from external
function CallCSSCase() {
    return <p className="config-style">Call CSS file Case</p>;
}
// Bootstrap
const BootstrapCase = ()=><p className="bg-dark text-light">Bootstrap (bg-dark text-light)</p>;

// Main component
function StyleJSX(){
    return (

        <div>
            <h1>Example</h1>
            <InlineCase1/>
            <InlineCase2/>
            <CallCSSCase/>
            <BootstrapCase/>
        </div>

    );
}

export default StyleJSX;