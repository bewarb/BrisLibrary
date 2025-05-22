import './App.css'
import { useState } from 'react';
import WelcomePage from './pages/WelcomePage';
import LibraryPage from './pages/LibraryPage';


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
  const [started, setStarted] = useState(false);
  return (
    <>
    {!started ? (
        <WelcomePage onStart={() => setStarted(true)} />
      ) : (
        <LibraryPage />
      )}
    </>
  )
}

export default App
