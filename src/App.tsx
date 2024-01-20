import About from "./component/About.tsx";
import {BrowserRouter, Route,  Routes} from "react-router-dom";
import Loading from "./component/Loading.tsx";
import Contact from "./component/Contact.tsx";
const App = () =>{

    return(
        <BrowserRouter >
            <Routes>
                <Route path={'/'} element={<About/>}/>
                <Route path={'/loading'} element={<Loading/>} />
                <Route path={'/Contact'} element={<Contact/>} />
            </Routes>
        </BrowserRouter>
        )
}
export  default  App