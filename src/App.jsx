import {Editor, Element, Frame, useNode} from "@craftjs/core";
import InputWithLabel from './shared/InputWithLabel'
import SettingsPanel from "./shared/Settings";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { addToForm, selectForm } from "./redux/slice/formSlice";
import { useSelector } from "react-redux";

export const SomeNode = ()=>{
  const {connectors:{connect,drag},id} = useNode()
  return(
    <div
    ref={ ref => connect(drag(ref))}
    id='parentId'
    >
      {id}
    </div>

  )
}

function App() {
  // const [value,setValue] = useState([])
  const formdata = useSelector((state)=>state)
  const dispatch = useAppDispatch()

  const onSubmit =()=>{
    console.log(formdata)
  }
  return (  

    <div>
        <Editor resolver={{InputWithLabel ,SomeNode}}>
          {/* // */}
          <h1>Welcome to Paradice stuff</h1>


<div
onClick={()=>{
  dispatch(addToForm({'key':'edd','value':'ddd'}))

}}
>
  dd
</div>

        <Frame>
          <div >
          <Element is={SomeNode} canvas>
            {/* hello */}
            
          </Element>
            <button
            onClick={e=>{
              e.preventDefault()
              onSubmit()
            }}
            >submit</button>
          </div>
          </Frame>


<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
        <SettingsPanel  register={()=>{}}/>

        </Editor>
    </div>

  )
}

export default App
