interface IinputFormComponent {
    type: string,
    label : string,
    placeholder : string
}
const InputForm = ({ type , label , placeholder }:IinputFormComponent) =>{
    return(
        <div className={'flex w-full justify-around items-center'} >
            <label className={'text-white font-Death font-light text-lg whitespace-nowrap'}>{label}</label>
            <input type={type} placeholder={placeholder} className={'w-10/12 py-2 text-white px-3 bg-purple-200 rounded-lg opacity-50 placeholder:text-white focus:opacity-100 outline-none'}/>
        </div>
    )
}
export default InputForm