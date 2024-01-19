import About from "./component/About.tsx";
import {BrowserRouter, Route,  Routes} from "react-router-dom";
import Loading from "./component/Loading.tsx";
const App = () =>{

    return(
        <BrowserRouter >
            <Routes>
                <Route path={'/'} element={<About/> }/>
                <Route path={'/loading'} element={<Loading/>} />
            </Routes>
        </BrowserRouter>
        )
}
export  default  App