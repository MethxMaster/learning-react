import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

const Page1 = ()=><h1>Page1</h1>
const Page2 = ()=><h1>Page2</h1>

function RouteExam(){
    return (
        <div>
            <Router>
                <ul>
                    <li>
                        <Link to="/">Page1</Link>
                    </li>
                    <li>
                        <Link to="/page2">Page2</Link>
                    </li>
                </ul>
                <Routes>
                    <Route path='/' element={<Page1/>}></Route>
                    <Route path='/page2' element={<Page2/>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default RouteExam;