

// normal props -------------------------------------------------
function Example1(properties){
    return (
        <div>
            <b>Normal props</b>
            <p>name : {properties.fname}, age : {properties.age}</p>
        </div>
    );
}

// props with array and object ----------------------------------
function Example2(){
    const data = [
        {fname : "Bunz", age : "28"},
        {fname : "Moss", age : "29"},
        {fname : "Foey", age : "29"},
        {fname : "ZUNG", age : "28"}
    ]
    return (
        <div>
            <b>Props using array, object</b>
            <p>name : {data[0].fname} ,  age : {data[0].age}</p>
            <p>name : {data[1].fname} ,  age : {data[1].age}</p>
            <p>name : {data[2].fname} ,  age : {data[2].age}</p>
            <p>name : {data[3].fname} ,  age : {data[3].age}</p>
        </div>
    );
}

// props with destructuring variable ---------------------------
function Example3_1(props){
    const {fname,age} = props;
    return (
        <>
            <b>Destructuring variable</b>
            <br></br>
            <u>ex.1</u>
            <p>name : {fname} ,  age : {age}</p>
        </>
    );
}
function Example3_2({fname,age}){
    return (
        <>
            <u>ex.2</u>
            <p>name : {fname} ,  age : {age}</p>
        </>
    );
}

// props with array maps --------------------------------
function Example4(){
    const data = [
        {fname : "Bunz", age : "28"},
        {fname : "Moss", age : "29"},
        {fname : "Foey", age : "29"},
        {fname : "ZUNG", age : "29"}
    ];
    return (
        <div>
            <b>Loop by array maps </b>
            {
                data.map((element)=>{ /*    data.map(({fname,age})=>{   */ 
                    return <p>name : {element.fname} ,  age : {element.age}</p>     /*  return <p>name : {fname} ,  age : {age}</p>  */
                })
            }
        </div>
    );
}


// Spread operator
function Example5(){
    const data = [
        {fname : "Bunz", age : "28"},
        {fname : "Moss", age : "29"}
    ];
    return (
        <div>
            <b>Spread operator</b>
            {
                data.map((element)=>{
                    return <SubExam5 {...element}/>
                })
            }
        </div>
    );
}
const SubExam5 = (props)=><p>name : {props.fname} ,  age : {props.age}</p>




function PropertiesJSX(){

    return (
        <div>
            <Example1 fname="Max" age="25"/>
            <Example2/>
            <Example3_1 fname="Fin" age="25"/>
            <Example3_2 fname="Cream" age="28"/>
            <Example4/>
            <Example5/>
        </div>
    );
}

export default PropertiesJSX;