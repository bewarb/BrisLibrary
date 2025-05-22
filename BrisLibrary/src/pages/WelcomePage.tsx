import LibraryLogo from './../assets/LibraryLogo.png';
import Grain from './../assets/grain.jpg';

function WelcomePage({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-screen bg-[#CCA975] flex items-center justify-center relative overflow-hidden">
      {/* Outer parchment background */}
      
      {/* Framed content */}
      <div className="relative z-10 border-[3px] border-black p-10 w-full max-w-4xl bg-[#CCA975] overflow-hidden">
        
        {/* Grain overlay inside the frame */}
        <div
          className="absolute inset-0 bg-repeat mix-blend-multiply opacity-50 pointer-events-none z-0"
          style={{
            backgroundImage: `url(${Grain})`,
            backgroundSize: 'cover',
          }}
        ></div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl mb-4" style={{ fontFamily: 'OldNewspaperTypes' }}>
            Briana & Chris's Library
          </h1>

          <p className="text-xl mb-6" style={{ fontFamily: 'OldNewspaperTypes' }}>
            Expand I will my mind to learn your heart.
          </p>

          <img
            src={LibraryLogo}
            alt="Library Logo"
            className="w-72 object-contain mix-blend-darken mb-6"
          />

          <button
            onClick={onStart}
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition mb-6"
          >
            Enter
          </button>

          <p className="text-sm max-w-xl" style={{ fontFamily: 'OldNewspaperTypes' }}>
            "Writing and reading decrease our sense of isolation. They deepen and widen and expand
            our sense of life: They feed the soul. When writers make us shake our heads with the
            exactness of their prose and their truths, and even make us laugh about ourselves or
            life, our buoyancy is restored. We are given a shot at dancing with, or at least
            clapping along with, the absurdity of life, instead of being squashed by it over and
            over again. It's like singing on a boat during a terrible storm at sea. You can't stop
            the raging storm, but singing can change the hearts and spirits of the people who are
            together on that ship."
            <br />– Anne Lamott, <i>Bird by Bird</i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
