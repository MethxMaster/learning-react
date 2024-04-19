//sub-component layer1
const Title = ()=><h1>React lesson</h1>
const Description = ()=><p>Here is an example how to use React writtingg JSX and link index.html, App.js by using index.js</p>
const ItemGroup = ()=>{
    return (
        <ul>
            <ItemList/>
        </ul>
    );
}

//sub-component layer2
const ItemList = ()=><li>index.js</li>

//main component
function NestedComponent(){
    return (
        <>
            <Title/>
            <Description/>
            <ItemGroup/>
        </>
    );
}

export default NestedComponent;