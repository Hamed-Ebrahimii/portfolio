import {Link} from "react-router-dom";
import FormContact from "./FormContact.tsx";

const Contact = () =>{
    return (
        <div className={'w-full h-screen bg-Contact bg-cover'}>
            <header className={'px-4 py-2'}>
               <p className={'text-white text-lg font-medium'}>
                   <Link to={'/'} >Go Back</Link>
               </p>
            </header>
            <div className={'w-full flex justify-center items-center flex-col gap-5 '}>
                <div className={'w-2/12 h-3 shadow-purple-300 shadow border-2 border-purple-400'}></div>
                <h1 className={'text-4xl text-purple-400 font-Death-outline font-bold'}>Contact Me</h1>
                <div className={'w-2/12 h-3 shadow-purple-300 shadow border-2 border-purple-400'}></div>
            </div>
            <div className={'w-full py-10 flex items-center justify-center mt-10'}>
               <div className={'w-1/2'}>
                    <FormContact/>
               </div>
            </div>
        </div>
    )
}
export default Contact