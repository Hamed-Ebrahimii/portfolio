interface props {
    handleTextContent : () => void,
    showBtn : boolean
}
const CLickOpen = (props : props) =>{

    return(
        <button onClick={props.handleTextContent} className={`text-white text-lg font-Death-outline ${props.showBtn ? '' : 'hidden'}`}>
            Click to Open
        </button>
    )
}
export default CLickOpen