import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  function red(){
    setColor("red")
  }
  function black(){
    setColor("black")
  }
  function lemon(){
    setColor("lemonchiffon")
  }
  function indigo(){
    setColor("indigo")
  }
 
  //or under onclick method we can call a callbackfn where setcolor will be called with specific parameter like this:- () => setColor("ColorName")
  return (
    <div className="w-full h-screen duration-500 "
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap px-5 h-8 bottom-12 justify-center inset-x-1 duration-200" 
      >
        <div className="fixed flex-wrap bg-slate-100 justify-center px-6 py-3 rounded-2xl gap-3 shadow-md ">
          <button onClick={red} className="shadow-xl mr-2 py-2 px-4 rounded-2xl text-justify hover:border-slate-700 "
          style={{backgroundColor: "red"}}
          >Red</button>
          <button onClick={black} className="shadow-xl mr-2 py-2 px-4  text-white rounded-2xl text-justify hover:border-slate-700"
          style={{backgroundColor: "black"}}
          >black</button>
          <button onClick={lemon} className="shadow-xl mr-2 py-2 px-4 rounded-2xl text-justify hover:border-slate-700"
          style={{backgroundColor: "lemonchiffon"}}
          >lemon</button>
          <button onClick={indigo} className="shadow-xl py-2 text-orange-200 px-4 rounded-2xl text-justify hover:border-slate-700"
          style={{backgroundColor: "indigo"}}
          >indigo</button>
        </div>
      </div>
    </div>
  )
}

export default App
