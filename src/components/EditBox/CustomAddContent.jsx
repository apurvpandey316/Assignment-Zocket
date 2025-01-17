import { useEffect,useState } from "react"
import { useDispatch } from "react-redux"
import { adText } from "../../app/adSlice.js"


function CustomAddContent() {

    const [text,setText] = useState()
    const [lengthExceeded, setLengthExceeded] = useState(false)
    const dispatch = useDispatch()

    const textHandler = (e) => {
        setText(e.target.value)
        setLengthExceeded(e.target.value.length > 100);
    }

    useEffect(() =>{
        dispatch(adText(text))
    },[text,dispatch])
  return (
    <div className='flex flex-col border-2 border-slate-300 sm:w-4/5 sm:h-14 w-5/6 h-13 rounded-lg  '>
      <label className=' mx-3 mt-1 mb-1 text-slate-500 text-xs font-bold'>Ad Content</label>
      <input type="text" className='mx-3 focus:outline-none ' onChange={(e)=>textHandler(e)}/>
      {lengthExceeded && <p className="text-sm text-red-700 font-medium self-center justify-self-center mx-5 mt-4">The limit is 100 characters, the rest will be truncated</p>}
    </div>
  )
}

export default CustomAddContent

