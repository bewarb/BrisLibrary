import './App.css'
import LibraryLogo from './assets/LibraryLogo.png'

function Start() {
  return (
    <div className="flex flex-col items-center justify-top h-screen bg-[#CCA975]">
    <h1
      className="text-3xl text-black"
      style={{ fontFamily: 'OldNewspaperTypes' }}
    >
      Briana and Chris's Library
    </h1>
  </div>
);
}

function App() {
  return (
    <>
      <div>
        <Start />
      </div>
      <div>
        <img src={LibraryLogo} className="w-48 object-contain mix-blend-darken" alt="Logo" />
      </div>
      
    </>
  )
}

export default App
