import { useEditor } from "@craftjs/core";
import React, { useEffect, useRef } from "react";
import InputWithLabel from "./InputWithLabel";
import { SomeNode } from "../App";
import lz from "lzutf8";
import copy from 'copy-to-clipboard';
const stateToLoad = `eyJST09UIjp7InR5cGUiOiJmb3JtIiwiaXNDYW52YXMiOmZhbHNlLCJwcm9wc8QoYWN0aW9uIjoiIn0sImRpc3BsYXlOYW3LPGN1c3RvbSI6e30sImhpZGRlbslGbm9kZXMiOlsiSFVtSExoMWVqZSIsInJFUFdpT01Zd3AiLCJSYU1Bcm55NlRQIiwidUJDS0QwR0U3dMQnY2hqSV9ZMHU2IiwiVTl4OEFwWXRHNSJdLCJsaW5rZWROxl57fX0szGHpAN17InJlc29sdmVk5wCxU29tZcQ15ADL6gDydHJ16wDx8QDmyTXuAOpwYXJlbnQiOuYBUfkA+vUAresBAeoBimJ1dHRvbv0BjGNoaWxkcsRmInN1Ym1pdPIBlMlG/wCs/wCs6gCs6wGg+gFZSW5wdXRXaXRoTGFiZWzuAV/wAMVwbGFjZWhvbGRlciI6IkhlbGxvIHdvcmxkIiwibMU/yhZsZPIA4s9s/wDq/wDq7ADq6wJ9/wDq/wDq/wDq/wDq/wDq/wDq/wDq5wKA6gNa/wDq/wDq/wDq/wDq/wDq/wDq/wDq5gDq6wQ3/wDq/wDq/wDq/wDq/wDq/wDq/wDq5ADqfQ`

 const SettingsPanel = () =>{

    const { connectors:{create}, query,actions:{addNodeTree,add,deserialize} } = useEditor();
    const ref = useRef()
    useEffect(()=>{
        if(ref.current){
            // @ts-ignore
            ref.current.click()
        }
    },[])
    return (
        <div>   

            <form 
     
            id="me" >


                <button
                onClick={(e)=>{
                    e.preventDefault()

                    const nodeTree = query.parseReactElement(
                        <InputWithLabel 
                        placeholder="Hello world"
                        label="Hello wold"
                        />
                        ).toNodeTree();
                    addNodeTree(nodeTree,'ROOT');
                }}
                >
                    add
                </button>

    
    
    <button
 onClick={e=>{
    e.preventDefault()
        const json = query.serialize();
        const finialData = lz.encodeBase64(lz.compress(json))
        console.log(finialData)
        copy(finialData);
    }}
    >
        Copy Data
    </button>
                <button
                onClick={e=>{
                    e.preventDefault()
                    const json = lz.decompress(lz.decodeBase64(stateToLoad));
                    deserialize(json);
                }}
                >
Load
                </button>
            </form>

        </div>
    )
 }



export default SettingsPanel