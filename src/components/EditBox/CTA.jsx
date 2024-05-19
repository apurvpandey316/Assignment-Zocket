import { useEffect,useState } from "react"
import {useDispatch} from 'react-redux'
import {adCTA} from '../../app/adSlice.js'

function CTA() {

    const [cta,setCta] = useState("");
    const [lengthExceeded, setLengthExceeded] = useState(false);
    const dispatch = useDispatch();

    const ctaHandler = (e) => {
        setCta(e.target.value);
        setLengthExceeded(e.target.value.length > 20);
    }

    useEffect(() => {
        dispatch(adCTA(cta));
    },[cta,dispatch])


  return (
    <>
    <div className='flex flex-col border-2 border-slate-300 w-5/6 sm:w-4/5 h-14 rounded-lg' >
      <label className=' mx-3 mt-1 mb-1 text-slate-500 text-xs font-bold'>CTA</label>
      <input type="text" className='mx-3 mb-1 focus:outline-none ' onChange={(e)=>ctaHandler(e)}/>
      {lengthExceeded && <p className="text-sm text-red-700 font-medium self-center justify-self-center mx-5 mt-4">The limit is 20 characters, the rest will be truncated</p>}
    </div>
    </>
  )
}

export default CTA
