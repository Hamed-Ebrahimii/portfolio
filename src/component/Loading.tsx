import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Loading = () =>{
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(()=>{
            sessionStorage.setItem('loading', 'true');
            navigate('/')
        } , 5000)
    }, []);
    return (
        <div className={'w-full h-screen flex flex-col items-center justify-center bg-black'}>
            <img src="/public/img/Frame 1.png" alt="" className={'w-3/12 animate-spin-slow'}/>
            <p className={'font-Death-outline text-lg text-white font-bold'}>is Loading...</p>
        </div>
    )
}
export default  Loading