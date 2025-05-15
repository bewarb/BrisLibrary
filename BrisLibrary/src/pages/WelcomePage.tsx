import LibraryLogo from './../assets/LibraryLogo.png'
import Grain from "./../assets/grain.jpg"

function WelcomePage({ onStart }: { onStart: () => void }) {
    return (
    <div className="min-h-screen border-4 border-black p-6 bg-[#CCA975] relative">
      <div className="flex flex-col items-center justify-top h-[80vh]">
        
        {/* Grain overlay */}
        <div
        className="fixed inset-0 bg-repeat mix-blend-multiply opacity-50 pointer-events-none z-0"
        style={{
            backgroundImage: `url(${Grain})`,
            backgroundSize: 'cover',
        }}
        ></div>
        <h1 className="text-3xl mb-6" style={{ fontFamily: 'OldNewspaperTypes' }}>
          Briana & Chris's Library
        </h1>
        <p className= "text-1.5xl" style={{ fontFamily: 'OldNewspaperTypes' }}> Expand I will my mind to learn your heart. </p>
        <div>
        <img src={LibraryLogo} className="w-100 object-contain mix-blend-darken" alt="Logo" />
      </div>
        <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition" onClick={onStart}>
          Enter
        </button>
        <div>
        <p className="pb-8 text-0.5xl mt-6 w-100 ;" style={{ fontFamily: 'OldNewspaperTypes' }}>
        "Writing and reading decrease our sense of isolation.
         They deepen and widen and expand our sense of life: They feed the soul. 
         When writers make us shake our heads with the exactness of their prose and their truths, 
         and even make us laugh about ourselves or life, our buoyancy is restored. We are given a shot at dancing with, 
         or at least clapping along with, the absurdity of life, instead of being squashed by it over and over again. 
         It's like singing on a boat during a terrible storm at sea. You can't stop the raging storm, 
         but singing can change the hearts and spirits of the people who are together on that ship." 
         <br />– Anne Lamott, Bird by Bird
        </p>
        </div>
        </div>
      </div>
    
    );
  }
  export default WelcomePage;
  