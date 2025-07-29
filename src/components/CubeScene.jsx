import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import React, { useState, useEffect, useCallback } from 'react';

function AboutFace() {
  return (
    <Html position={[0, 0, 1.76]} center distanceFactor={2.3} transform scale={[1.5, 1.5, -1.5]}>
      <div className="bg-white text-black px-6 py-4 rounded-xl shadow-xl w-[300px] h-[300px] flex flex-col justify-center text-sm text-center overflow-hidden">
        <h2 className="text-xl font-bold mb-2">Hi, I'm Rishit Mishra</h2>
        <p className="text-gray-700 font-medium">Aspiring Data Scientist</p>
        <p className="text-gray-600 mt-2">
          Passionate about transforming data into actionable insights. 
          Skilled in Python, data analysis, and building machine learning models.
        </p>
        <p className="text-gray-600 mt-1">
          Focused on continuous learning and solving real-world problems with AI tools.
        </p>
        <button
          onClick={() => alert("Scroll to full About section")}
          className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          About Me
        </button>
      </div>
    </Html>
  );
}

function SkillsFace() {
  return (
    <Html
      position={[1.76, 0, 0]}
      center
      distanceFactor={2.3}
      transform
      rotation={[0, -Math.PI / 2, 0]}
      scale={[-1.5, 1.5, 1.5]}
    >
      <div className="bg-white text-black px-6 py-4 rounded-xl shadow-xl w-[300px] h-[300px] flex flex-col justify-start text-sm overflow-hidden">
        <h3 className="text-xl font-semibold text-center mb-2">Technical Skill Set</h3>

        <div className="space-y-1">
          <p className="font-medium">Languages & Databases</p>
          <ul className="list-disc list-inside text-gray-700 text-sm ml-2">
            <li>Python</li>
            <li>SQL</li>
          </ul>

          <p className="font-medium mt-2">Libraries & Frameworks</p>
          <ul className="list-disc list-inside text-gray-700 text-sm ml-2">
            <li>Pandas, NumPy</li>
            <li>Scikit-learn, PyTorch</li>
            <li>Matplotlib, Seaborn</li>
          </ul>

          <p className="font-medium mt-2">Tools</p>
          <ul className="list-disc list-inside text-gray-700 text-sm ml-2">
            <li>VS Code</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        <p className="italic text-gray-600 text-xs mt-auto text-center">
          Continuously learning and exploring new tools.
        </p>
      </div>
    </Html>
  );
}

function ContactFace() {
  return (
    <Html
      position={[-1.76, 0, 0]}
      center
      distanceFactor={2.3}
      transform
      rotation={[0, Math.PI / 2, 0]}
      scale={[-1.5, 1.5, 1.5]}
    >
      <div className="bg-white text-black px-6 py-4 rounded-xl shadow-xl w-[300px] h-[300px] flex flex-col justify-center text-sm overflow-hidden text-center">
        <h3 className="text-xl font-semibold mb-2">Let's Connect</h3>
        <p className="text-gray-700 mb-1">Rishit Mishra</p>
        <p className="text-gray-600 text-sm mb-3">
          <a href="mailto:rishit.mishra314@gmail.com" className="hover:underline">Email</a>
        </p>
        <div className="space-y-1 text-sm text-blue-600">
          <a href="https://github.com/rishit314" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a><br />
          <a href="https://www.linkedin.com/in/rishit-mishra-915676275/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        </div>
        <button
          onClick={() => alert('Scroll to Contact section or open email client')}
          className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Contact Me
        </button>
      </div>
    </Html>
  );
}

function CertsAndExperienceFace() {
  return (
    <Html
      position={[0, 1.76, 0]}
      center
      distanceFactor={2.3}
      transform
      rotation={[-Math.PI / 2, 0, 0]}
      scale={[1.5, 1.5, -1.5]}
    >
      <div className="bg-white text-black px-6 py-4 rounded-xl shadow-xl w-[300px] h-[300px] flex flex-col justify-start text-sm overflow-hidden">
        <h3 className="text-xl font-bold text-center mb-2">Certifications</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-3 ml-2">
          <li>NPTEL: Python for Data Science</li>
        </ul>
        <h3 className="text-xl font-bold text-center mb-2 mt-2">Experience</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm ml-2">
          <li>Python Programming Intern (1 month) – MotionCut</li>
          <li>Freelance ML Projects (Personal & Academic)</li>
        </ul>
      </div>
    </Html>
  );
}

function ProjectsFace() {
  return (
    <Html
      position={[0, 0, -1.76]}
      center
      distanceFactor={2.3}
      transform
      rotation={[0, Math.PI, 0]}
      scale={[1.5, 1.5, -1.5]}
    >
      <div className="bg-white text-black px-6 py-4 rounded-xl shadow-xl w-[300px] h-[300px] flex flex-col justify-start text-sm overflow-hidden">
        <h3 className="text-xl font-bold text-center mb-2">Projects</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm ml-2 space-y-1">
          <li><strong>3D Portfolio Website</strong><p className="text-xs text-gray-600">Built with React Three Fiber, this interactive 3D cube site showcases my profile, skills, and work.</p></li>
          <li><strong>Lung Cancer Risk Prediction</strong><p className="text-xs text-gray-600">Developed an ML model using LSTM and FNN architectures to predict risk from patient data.</p></li>
          <li><strong>More coming soon...</strong><p className="text-xs text-gray-500 italic">Constantly learning and building new things.</p></li>
        </ul>
      </div>
    </Html>
  );
}

function SnakeGameFace() {
  const gridSize = 10;
  const [snake, setSnake] = useState([[2, 0], [1, 0]]);
  const [food, setFood] = useState([Math.floor(Math.random() * gridSize), Math.floor(Math.random() * gridSize)]);
  const [direction, setDirection] = useState([1, 0]);
  const [playing, setPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [points, setPoints] = useState(0);

  const move = useCallback(() => {
    setSnake(prev => {
      const newHead = [prev[0][0] + direction[0], prev[0][1] + direction[1]];
      const outOfBounds = newHead[0] < 0 || newHead[0] >= gridSize || newHead[1] < 0 || newHead[1] >= gridSize;
      const hitSelf = prev.some(segment => segment[0] === newHead[0] && segment[1] === newHead[1]);

      if (outOfBounds || hitSelf) {
        setGameOver(true);
        setPlaying(false);
        return prev;
      }

      const newSnake = [newHead, ...prev];

      if (newHead[0] === food[0] && newHead[1] === food[1]) {
        setFood([Math.floor(Math.random() * gridSize), Math.floor(Math.random() * gridSize)]);
        setPoints(p => p + 1);
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food]);

  useEffect(() => {
    if (!playing || gameOver) return;
    const interval = setInterval(move, 200);
    return () => clearInterval(interval);
  }, [move, playing, gameOver]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!playing) return;
      switch (e.key) {
        case 'ArrowUp': return setDirection([0, -1]);
        case 'ArrowDown': return setDirection([0, 1]);
        case 'ArrowLeft': return setDirection([-1, 0]);
        case 'ArrowRight': return setDirection([1, 0]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [playing]);

  const togglePlay = () => {
    if (gameOver) {
      setSnake([[2, 0], [1, 0]]);
      setDirection([1, 0]);
      setFood([Math.floor(Math.random() * gridSize), Math.floor(Math.random() * gridSize)]);
      setGameOver(false);
      setPoints(0);
    }
    setPlaying(p => !p);
  };

  return (
    <Html position={[0, -1.76, 0]} center transform rotation={[Math.PI / 2, 0, 0]} scale={[-0.5, -0.5, 0.5]}>
      <div className="w-[192px] h-[210px] bg-white text-black rounded-lg shadow-lg flex flex-col items-center justify-center p-1 text-center">
        <h3 className="text-xs font-semibold mb-1">Snake</h3>
        <p className="text-[10px] mb-1">Points: {points}</p>
        <div className="grid grid-cols-10 grid-rows-10 gap-[1px] bg-gray-300" style={{ width: 120, height: 120 }}>
          {[...Array(100)].map((_, i) => {
            const x = i % 10;
            const y = Math.floor(i / 10);
            const isSnake = snake.some(([sx, sy]) => sx === x && sy === y);
            const isFood = food[0] === x && food[1] === y;
            return (
              <div key={i} className={`w-full h-full ${isSnake ? 'bg-black' : isFood ? 'bg-red-500' : 'bg-white'}`} />
            );
          })}
        </div>
        <button onClick={togglePlay} className="mt-1 px-2 py-1 bg-black text-white text-[10px] rounded hover:bg-gray-800">
          {gameOver ? 'Restart' : playing ? 'Stop' : 'Play'}
        </button>
        {gameOver && <p className="text-[10px] text-red-600 mt-1">Game Over</p>}
      </div>
    </Html>
  );
}
function Cube() {
  return (
    <mesh rotation={[0.5, 0.5, 0.5]}>
      <boxGeometry args={[3.5, 3.5, 3.5]} />
      <meshStandardMaterial color="#38bdf8" />
      <AboutFace />
      <SkillsFace />
      <ProjectsFace />
      <ContactFace />
      <CertsAndExperienceFace />
      <SnakeGameFace />
    </mesh>
  );
}

export default function CubeScene() {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 flex items-center justify-center">
      <Canvas camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 2, 1]} intensity={1} />
        <Cube />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={0}
          maxPolarAngle={Math.PI}
          rotateSpeed={0.9}
        />
      </Canvas>
    </div>
  );
}
