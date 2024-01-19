import SocialMedia from "./SocialMedia.tsx";
import CLickOpen from "./CLickOpen.tsx";
import {useNavigate} from "react-router-dom";
import anime from 'animejs/lib/anime.es.js';
import {useEffect, useRef, useState} from "react";
import ArrowTop from "./icon/ArrowTop.tsx";
import ArrowBotton from "./icon/ArrowBotton.tsx";

const About = () =>{
        const navigate = useNavigate()
        const textContent = useRef<HTMLDivElement>(null)
        const [showBtn , setShowBtn] = useState(true)
        const [showText , setShowText] = useState(false)
    useEffect(() => {
        if (sessionStorage.getItem('loading'))return
        navigate('/loading')
    }, []);
        window.addEventListener('mouseup' , ()=>{
            console.log('ok')
        })
    const handleNavigate = (link : string) =>{
            navigate(link)
    }
    const handleTextContent = () => {
        anime({
            targets : textContent.current,
            width : '70%',
            height : '300px'
        })
        textContent.current!.classList.add('glass')
        setShowBtn(false)
        setShowText(true)
        setTimeout(()=>{
            setShowText(false)
            anime({
                targets : textContent.current,
                width : '176px',
                height : '64px'
            })
            setShowBtn(true)
            textContent.current!.classList.remove('glass')
        }, 5000)
    }
    return (

            <div className={'w-full h-screen bg-Hero-1 bg-cover'}>
                <header className={'w-full py-3 px-4 flex items-center justify-end'}>
                    <p className={'font-Death text-lg text-white hover:shadow-2xl hover:shadow-purple-300 cursor-pointer'} onClick={()=> handleNavigate('/Contact-me')}>Contact Me</p>
                </header>
                <div className={'w-full py-4 flex flex-col items-center justify-center'}>
                    <div className={'w-6/12 flex gap-3 items-center justify-center'}>
                        <div className={'w-8/12 h-4 border-2 border-purple-500 shadow-2xl shadow-purple-300'}></div>
                        <p className={'font-Death font-medium text-lg text-purple-300 whitespace-nowrap'}>a message from
                            earth </p>
                    </div>
                    <div>
                        <h1 className={'text-5xl  font-bold font-Death-outline text-purple-600 shadow-2xl'}>hello fellow
                            galaxy member</h1>
                    </div>
                    <div className={'w-6/12 flex gap-3 items-center justify-center'}>
                        <p className={'font-Death font-medium text-lg text-purple-300 whitespace-nowrap'}>a message from
                            earth
                        </p>
                        <div className={'w-8/12 h-4 border-2 border-purple-500 shadow-2xl shadow-purple-300'}></div>
                    </div>
                    <h2 className={'text-5xl font-Death-outline font-medium text-purple-400 mt-10'}>
                        I Am Hamedi
                    </h2>
                </div>
                <SocialMedia/>
                <div className={'w-full flex items-center justify-center '}>
                  <div ref={textContent} className={' flex items-center justify-center border-2 border-purple-400 h-16 w-44 rounded-lg absolute transition-all  hover:shadow-2xl hover:shadow-purple-300 top-1/2 text-white  text-lg '}>
                     <ArrowTop/>
                      <CLickOpen handleTextContent={handleTextContent} showBtn={showBtn}/>
                      <p className={`text-white w-8/12  text-lg text-center ${showText ? '' : 'hidden'}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                      <ArrowBotton/>
                  </div>
                </div>
            </div>

    )
}
export default About