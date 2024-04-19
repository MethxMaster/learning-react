import React from "react";      //import for react.Fragment

// return the fucntion must be one block output
// we can use more that  <React.Fragment>   example below

// <div>    ...     </div>
// <section>    ...     </section>     (Semantics)
// <React.Fragment>     ...     </React.Fragment>
// <>   ...   </>

function ReactJSXFormat(){
    return (
        <React.Fragment>        
            <h1>Header</h1>
            <p> Here is an example how to use React writtingg JSX and link index.html, App.js by using index.js
            </p>
            <ul>
                <li>index.html</li>
                <li>index.app</li>
                <li>App.js</li>
            </ul>
        </React.Fragment>
    );
}

export default ReactJSXFormat;
