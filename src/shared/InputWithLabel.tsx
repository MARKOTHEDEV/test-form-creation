import React, { useEffect, useRef, useState } from "react"
import { useNode } from "@craftjs/core";
import ContentEditable from 'react-contenteditable'
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addToForm, selectForm, updateForm } from "../redux/slice/formSlice";


type Prop ={
    label?:any;
    placeholder?:string;
    name?:string
  }

const InputWithLabel = ({label
    ,placeholder,}:Prop)=>{
    const {connectors:{connect,drag}, actions: {setProp}} = useNode()
    const [value,setValue] = useState('s')

    const dispatch = useAppDispatch()
  const {formData} = useAppSelector(selectForm)


    return (
        <div
        // @ts-ignore
        ref={ ref => connect(drag(ref))}
    
        >
        <ContentEditable
        html={label} 
        onChange={e => 
        setProp(props =>{
            console.log(e.target.value.replace(/<\/?[^>]+(>|$)/g, "") )
            props.label = e.target.value.replace(/<\/?[^>]+(>|$)/g, "") 
        } 
        )
        } 
        tagName="label"
        />
        <br />

              {/* <label htmlFor={label}>{label}</label>  */}
              <input
            //   ref={inputRef}
              name={label.replace(' ','-')}
              type="text"  id={label} placeholder={placeholder} 
                //   onChange={e=>{
                //     const newdata ={
                //         'key':e.target.name,
                //         'value':e.target.value
                //     }

                //     if(formdata.filter((d,index)=>{return d.key === e.target.name}).length == 0){
                //         dispatch(addToForm(newdata))
                //     }else{
                //         const updatedData = formdata.map((d)=>{
                //             if(d.key === newdata.key){
                //                 return newdata
                //             }
                //             return d
                //         })
                //         dispatch(updateForm(updatedData))

                //     }
                // }}
            
              />
        </div>
    )
}

export default InputWithLabel

InputWithLabel.craft  ={
    name:'InputWithLabel',
    displayName:'InputWithLabel',

}