import { useState } from "react"

function App() {
  const [Color, setColor] = useState("Black")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor : Color}}>
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2 rounded-full">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rpunded-full"> <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
          <button
          onClick={() => setColor("lavender")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "lavender"}}
          >Lavender</button>
          <button
          onClick={() => setColor("Pink")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "Pink"}}
          >Pink</button>
          <button
          onClick={() => setColor("Yellow")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "Yellow"}}
          >Yellow</button>
          </div>
      </div>
    </div>
  )
}

export default App
