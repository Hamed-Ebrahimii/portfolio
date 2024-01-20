import React from "react";
import InputForm from "./InputForm.tsx";

const FormContact = () =>{
    const handlerSubmitted : React.FormEventHandler<HTMLFormElement> = (event) =>{
        event.preventDefault();
    }
    return(
        <form onSubmit={handlerSubmitted} className={'w-full flex flex-col gap-4'}>
            <InputForm type={'email'} label={'email :'} placeholder={'jayendraawasthi06@gmail.com'}/>
            <InputForm type={'text'} label={'subject :'} placeholder={'Something something'}/>
            <div className={'flex w-full justify-around'}>
                <label className={'text-white font-Death font-light text-lg whitespace-nowrap'}>Content</label>
                <textarea name="" id="" cols={30} rows={10} placeholder={'Something something something something something something something\n' +
                    'somethingsomething somethingsomething something'} className={'w-10/12 py-2 px-3 bg-purple-200 rounded-lg opacity-50 placeholder:text-white focus:opacity-100 outline-none'}></textarea>

            </div>
            <button type="submit" className={'w-1/2 py-2 px-3 rounded-lg text-white self-center border ml-16'}>Submit</button>
        </form>
    )
}
export default FormContact