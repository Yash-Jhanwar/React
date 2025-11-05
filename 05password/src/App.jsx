import { useState , useCallback , useEffect , useRef} from 'react'
import './App.css'


function App() {
  const [length, setlength] = useState(8)
  const [numberallowed, setNumberallowed] = useState(false)
  const [charallowed, setCharallowed] = useState(false)
  const [Password, setpassword] = useState('')
  const [copied, setCopied] = useState(false);


  const Passwordref = useRef(null)

  const generatepassword = useCallback (()=> {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberallowed) {
      str += '0123456789'
    }
    if (charallowed) {
      str += '!@#$%^&*()_+~`|}{[]:;?><,./-='
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
     setpassword(pass);
  }, [length, numberallowed, charallowed, setpassword]);

  const copyPasswordtoClipboard = useCallback(() => {
    Passwordref.current?.select();
    window.navigator.clipboard.writeText(Password);
      if (Password) {
    navigator.clipboard.writeText(Password);
    setCopied(true);
    setTimeout(() => setCopied(false), 10000); 
  }
  }
  , [Password])

  useEffect(() => {
    generatepassword();
  }, [length, numberallowed, charallowed, setpassword]);
  return (
  <>
  <div className="w-200 max-w-700 rounded-lg p-4 text-orange-600 bg-gray-700 text-xl font-semibold text-center my-3">
    Password Generator
    <div className="bg-white p-2 mt-4 rounded-xl text-black flex shadow overflow-hidden"> 
      <input 
        type='text'
        value={Password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={Passwordref}
      />
      <button
  onClick={copyPasswordtoClipboard}
  className={`outline-none px-4 py-1 rounded-md text-white transition-all duration-300 transform ${
    copied
      ? 'bg-gray-500 scale-105'
      : 'bg-blue-400 hover:bg-blue-500! hover:scale-105'
  }`}
>
  {copied ? "Copied!" : "Copy"}
</button>


    </div>
    <div className="flex flex-col sm:flex-row items-center justify-between text-sm gap-3
     bg-gray-800 text-gray-200 p-4 rounded-lg shadow-md">{/* Length Control */}
      <div className="flex items-center gap-2 w-full sm:w-auto">
        {/* length slider */}
        <div
  className="flex flex-col sm:flex-row items-center justify-between text-sm gap-4
  bg-gray-800 text-gray-200 p-4 rounded-lg shadow-md w-full"
>
<div className="w-full bg-gray-800 text-gray-200 p-4 rounded-lg shadow-md ">
  <label htmlFor="length" className="block text-sm font-medium mb-2">
    Password Length: <span className="text-blue-400 font-semibold">{length}</span>
  </label>

  <input
    id="length"
    type="range"
    min={4}
    max={100}
    value={length}
    onChange={(e) => setlength(Number(e.target.value))}
    className={`w-full h-2 rounded-lg appearance-none cursor-pointer transition-all duration-300 
      ${
        length < 7
          ? "bg-linear-to-r from-red-500 to-orange-500"
          : length < 6
          ? "bg-linear-to-r from-orange-500 to-yellow-400"
          : length < 8
          ? "bg-linear-to-r from-yellow-400 to-lime-400"
          : length < 10
          ? "bg-linear-to-r from-lime-400 to-green-500"
          : "bg-linear-to-r from-green-500 to-emerald-400"
      }`}
    style={{
      accentColor:
        length < 7
          ? "#ef4444" // red
          : length < 10
          ? "#f59e0b" // yellow
          : length < 14
          ? "#84cc16" // lime
          : length < 18
          ? "#22c55e" // green
          : "#10b981", // emerald
    }}
  />

  
</div>


  

</div>

        
        <div className="flex items-center gap-2">
          {/* checkbox button of Number */}
          <input
          type="checkbox"
          checked={numberallowed}
          id="numberInput"
          onChange={() => setNumberallowed((prev)=>!prev)
          }
          />
          <label htmlFor="NumberInput"> Numbers</label>
        </div>

        <div className="flex items-center gap-2">
          {/* checkbox button of Charactor */}
          <input
          type="checkbox"
          checked={charallowed}
          id="CharacterInput"
          onChange={() => setCharallowed((prev)=>!prev)
          }
          />
          <label htmlFor="NumberInput"> Character</label>
        </div>
      </div>
    </div>

  </div>



  </>
  )
}

export default App
