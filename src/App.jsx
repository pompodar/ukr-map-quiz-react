import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

import mapImg from './assets/map_of_ukraine_1.png'

const UkraineQuiz = () => {
  const [currentRegion, setCurrentRegion] = useState('');
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [gameStatus, setGameStatus] = useState('playing');
  const [feedback, setFeedback] = useState('nope');

  const regions = {
    kyiv: 'Київ',
    lviv: 'Львів',
    odesa: 'Одеса',
    kharkiv: 'Харків',
    dnipro: 'Дніпро',
    donetsk: 'Донецьк',
    luhansk: 'Луганськ',
    crimea: 'Крим',
  };

  useEffect(() => {
    pickNewRegion();
  }, []);

  const pickNewRegion = () => {
    const regionKeys = Object.keys(regions);
    const randomRegion = regionKeys[Math.floor(Math.random() * regionKeys.length)];
    setCurrentRegion(randomRegion);
    setFeedback('');
  };

  const handleRegionClick = (region) => {
    if (gameStatus !== 'playing') return;

    setAttempts(attempts + 1);
    
    if (region === currentRegion) {
      setScore(score + 1);
      setFeedback('Правильно! 🎉');
      setTimeout(pickNewRegion, 1500);
    } else {
      setFeedback(`Неправильно. Спробуйте ще раз!`);
    }

    if (attempts >= 9) {
      setGameStatus('finished');
    }
  };

  const resetGame = () => {
    setScore(0);
    setAttempts(0);
    setGameStatus('playing');
    pickNewRegion();
  };

  return (
    <Card className="w-full">
      <CardHeader className="text-4xl text-center">
        <p>
          Вікторина з географії України
        </p>  
      </CardHeader>
      <CardContent>
        <div className="text-center mb-4">
          <p className="text-4xl mb-2">
            Знайдіть: <strong>{regions[currentRegion]}</strong>
          </p>
          <p className="text-3xl">
            Рахунок: {score}/{attempts} спроб
          </p>
          <div className="flex items-center justify-center h-8 gap-2 mt-2">
            {feedback && (
              <div className="flex items-center gap-2">
                {feedback.includes('Правильно') ? (
                  <CheckCircle2 className="text-green-500" />
                ) : (
                  <AlertCircle className="text-red-500" />
                )}
                <p>{feedback}</p>
              </div>
            )}
          </div>
        </div>

        <div className="items relative w-[600px] h-[400px]">
          <img className="absolute w-full z-0" src={mapImg} alt="Ukraine Map" />

          <div
            className="w-full h-full z-10 relative"
          >
            {/* Simplified Ukraine map - regions are represented as rectangles for demo */}
              <div
                onClick={() => handleRegionClick('kyiv')}
              className="absolute flex justify-center items-center bg-[aqua] w-10 h-10 p-2 rounded-[50%] shadow-lg cursor-pointer hover:scale-105
               left-[303px] top-[74px]">
                    <span x="450" y="250" textAnchor="middle">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="red" height="20px" width="20px" version="1.1" id="Capa_1" viewBox="0 0 213.195 213.195" xml:space="preserve">
                        <path d="M210.856,203.383l-25.689-79.277c-1.002-3.093-3.884-5.188-7.135-5.188h-18.135c8.12-14.714,13.953-32.089,13.953-51.658  C173.85,30.173,143.68,0,106.596,0c-37.081,0-67.25,30.173-67.25,67.26c0,19.569,5.833,36.944,13.952,51.658H35.164  c-3.252,0-6.132,2.095-7.135,5.188L2.34,203.383c-0.74,2.283-0.342,4.782,1.069,6.723c1.411,1.941,3.666,3.089,6.066,3.089h194.246  c2.4,0,4.654-1.148,6.066-3.089C211.198,208.165,211.595,205.666,210.856,203.383z M106.596,15c28.813,0,52.254,23.444,52.254,52.26  c0,46.04-39.284,79.696-52.262,89.557C93.6,146.983,54.346,113.433,54.346,67.26C54.346,38.444,77.785,15,106.596,15z   M19.789,198.195l20.829-64.277h22.295c17.32,23.623,38.092,37.444,39.58,38.417c1.247,0.815,2.675,1.222,4.104,1.222  c1.429,0,2.857-0.407,4.104-1.222c1.486-0.972,22.261-14.794,39.582-38.417h22.297l20.828,64.277H19.789z"/>
                        </svg>
                    </span>
              </div>

              <div
                onClick={() => handleRegionClick('lviv')}
                className="absolute flex justify-center items-center bg-[aqua] w-10 h-10 p-2 rounded-[50%] shadow-lg cursor-pointer hover:scale-105 left-[114px] top-[94px]">
                    <span x="250" y="250" textAnchor="middle"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="red" height="20px" width="20px" version="1.1" id="Capa_1" viewBox="0 0 213.195 213.195" xml:space="preserve">
                    <path d="M210.856,203.383l-25.689-79.277c-1.002-3.093-3.884-5.188-7.135-5.188h-18.135c8.12-14.714,13.953-32.089,13.953-51.658  C173.85,30.173,143.68,0,106.596,0c-37.081,0-67.25,30.173-67.25,67.26c0,19.569,5.833,36.944,13.952,51.658H35.164  c-3.252,0-6.132,2.095-7.135,5.188L2.34,203.383c-0.74,2.283-0.342,4.782,1.069,6.723c1.411,1.941,3.666,3.089,6.066,3.089h194.246  c2.4,0,4.654-1.148,6.066-3.089C211.198,208.165,211.595,205.666,210.856,203.383z M106.596,15c28.813,0,52.254,23.444,52.254,52.26  c0,46.04-39.284,79.696-52.262,89.557C93.6,146.983,54.346,113.433,54.346,67.26C54.346,38.444,77.785,15,106.596,15z   M19.789,198.195l20.829-64.277h22.295c17.32,23.623,38.092,37.444,39.58,38.417c1.247,0.815,2.675,1.222,4.104,1.222  c1.429,0,2.857-0.407,4.104-1.222c1.486-0.972,22.261-14.794,39.582-38.417h22.297l20.828,64.277H19.789z"/>
                    </svg></span>
              </div>

              <div
                onClick={() => handleRegionClick('odesa')}
                className="absolute flex justify-center items-center bg-[aqua] w-10 h-10 p-2 rounded-[50%] shadow-lg cursor-pointer hover:scale-105">
                    <span x="250" y="250" textAnchor="middle"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="red" height="20px" width="20px" version="1.1" id="Capa_1" viewBox="0 0 213.195 213.195" xml:space="preserve">
                    <path d="M210.856,203.383l-25.689-79.277c-1.002-3.093-3.884-5.188-7.135-5.188h-18.135c8.12-14.714,13.953-32.089,13.953-51.658  C173.85,30.173,143.68,0,106.596,0c-37.081,0-67.25,30.173-67.25,67.26c0,19.569,5.833,36.944,13.952,51.658H35.164  c-3.252,0-6.132,2.095-7.135,5.188L2.34,203.383c-0.74,2.283-0.342,4.782,1.069,6.723c1.411,1.941,3.666,3.089,6.066,3.089h194.246  c2.4,0,4.654-1.148,6.066-3.089C211.198,208.165,211.595,205.666,210.856,203.383z M106.596,15c28.813,0,52.254,23.444,52.254,52.26  c0,46.04-39.284,79.696-52.262,89.557C93.6,146.983,54.346,113.433,54.346,67.26C54.346,38.444,77.785,15,106.596,15z   M19.789,198.195l20.829-64.277h22.295c17.32,23.623,38.092,37.444,39.58,38.417c1.247,0.815,2.675,1.222,4.104,1.222  c1.429,0,2.857-0.407,4.104-1.222c1.486-0.972,22.261-14.794,39.582-38.417h22.297l20.828,64.277H19.789z"/>
                    </svg></span>
              </div>

              <div
                onClick={() => handleRegionClick('kharkiv')}
                className="absolute flex justify-center items-center bg-[aqua] w-10 h-10 p-2 rounded-[50%] shadow-lg cursor-pointer hover:scale-105">
                    <span x="250" y="250" textAnchor="middle"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="red" height="20px" width="20px" version="1.1" id="Capa_1" viewBox="0 0 213.195 213.195" xml:space="preserve">
                  <path d="M210.856,203.383l-25.689-79.277c-1.002-3.093-3.884-5.188-7.135-5.188h-18.135c8.12-14.714,13.953-32.089,13.953-51.658  C173.85,30.173,143.68,0,106.596,0c-37.081,0-67.25,30.173-67.25,67.26c0,19.569,5.833,36.944,13.952,51.658H35.164  c-3.252,0-6.132,2.095-7.135,5.188L2.34,203.383c-0.74,2.283-0.342,4.782,1.069,6.723c1.411,1.941,3.666,3.089,6.066,3.089h194.246  c2.4,0,4.654-1.148,6.066-3.089C211.198,208.165,211.595,205.666,210.856,203.383z M106.596,15c28.813,0,52.254,23.444,52.254,52.26  c0,46.04-39.284,79.696-52.262,89.557C93.6,146.983,54.346,113.433,54.346,67.26C54.346,38.444,77.785,15,106.596,15z   M19.789,198.195l20.829-64.277h22.295c17.32,23.623,38.092,37.444,39.58,38.417c1.247,0.815,2.675,1.222,4.104,1.222  c1.429,0,2.857-0.407,4.104-1.222c1.486-0.972,22.261-14.794,39.582-38.417h22.297l20.828,64.277H19.789z"/>
                  </svg></span>
              </div>

              <div
                onClick={() => handleRegionClick('dnipro')}
                className="absolute flex justify-center items-center bg-[aqua] w-10 h-10 p-2 rounded-[50%] shadow-lg cursor-pointer hover:scale-105">
                    <span x="250" y="250" textAnchor="middle"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="red" height="20px" width="20px" version="1.1" id="Capa_1" viewBox="0 0 213.195 213.195" xml:space="preserve">
                    <path d="M210.856,203.383l-25.689-79.277c-1.002-3.093-3.884-5.188-7.135-5.188h-18.135c8.12-14.714,13.953-32.089,13.953-51.658  C173.85,30.173,143.68,0,106.596,0c-37.081,0-67.25,30.173-67.25,67.26c0,19.569,5.833,36.944,13.952,51.658H35.164  c-3.252,0-6.132,2.095-7.135,5.188L2.34,203.383c-0.74,2.283-0.342,4.782,1.069,6.723c1.411,1.941,3.666,3.089,6.066,3.089h194.246  c2.4,0,4.654-1.148,6.066-3.089C211.198,208.165,211.595,205.666,210.856,203.383z M106.596,15c28.813,0,52.254,23.444,52.254,52.26  c0,46.04-39.284,79.696-52.262,89.557C93.6,146.983,54.346,113.433,54.346,67.26C54.346,38.444,77.785,15,106.596,15z   M19.789,198.195l20.829-64.277h22.295c17.32,23.623,38.092,37.444,39.58,38.417c1.247,0.815,2.675,1.222,4.104,1.222  c1.429,0,2.857-0.407,4.104-1.222c1.486-0.972,22.261-14.794,39.582-38.417h22.297l20.828,64.277H19.789z"/>
                    </svg></span>
              </div>

               <div
                onClick={() => handleRegionClick('donetsk')}
                className="absolute lex justify-center items-center bg-[aqua] w-10 h-10 p-2 rounded-[50%] shadow-lg cursor-pointer hover:scale-105">
                    <span x="250" y="250" textAnchor="middle"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="red" height="20px" width="20px" version="1.1" id="Capa_1" viewBox="0 0 213.195 213.195" xml:space="preserve">
<path d="M210.856,203.383l-25.689-79.277c-1.002-3.093-3.884-5.188-7.135-5.188h-18.135c8.12-14.714,13.953-32.089,13.953-51.658  C173.85,30.173,143.68,0,106.596,0c-37.081,0-67.25,30.173-67.25,67.26c0,19.569,5.833,36.944,13.952,51.658H35.164  c-3.252,0-6.132,2.095-7.135,5.188L2.34,203.383c-0.74,2.283-0.342,4.782,1.069,6.723c1.411,1.941,3.666,3.089,6.066,3.089h194.246  c2.4,0,4.654-1.148,6.066-3.089C211.198,208.165,211.595,205.666,210.856,203.383z M106.596,15c28.813,0,52.254,23.444,52.254,52.26  c0,46.04-39.284,79.696-52.262,89.557C93.6,146.983,54.346,113.433,54.346,67.26C54.346,38.444,77.785,15,106.596,15z   M19.789,198.195l20.829-64.277h22.295c17.32,23.623,38.092,37.444,39.58,38.417c1.247,0.815,2.675,1.222,4.104,1.222  c1.429,0,2.857-0.407,4.104-1.222c1.486-0.972,22.261-14.794,39.582-38.417h22.297l20.828,64.277H19.789z"/>
</svg></span>
              </div>

              <div
                onClick={() => handleRegionClick('luhansk')}
                className="absolute lex justify-center items-center bg-[aqua] w-10 h-10 p-2 rounded-[50%] shadow-lg cursor-pointer hover:scale-105">
                    <span x="250" y="250" textAnchor="middle"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="red" height="20px" width="20px" version="1.1" id="Capa_1" viewBox="0 0 213.195 213.195" xml:space="preserve">
                    <path d="M210.856,203.383l-25.689-79.277c-1.002-3.093-3.884-5.188-7.135-5.188h-18.135c8.12-14.714,13.953-32.089,13.953-51.658  C173.85,30.173,143.68,0,106.596,0c-37.081,0-67.25,30.173-67.25,67.26c0,19.569,5.833,36.944,13.952,51.658H35.164  c-3.252,0-6.132,2.095-7.135,5.188L2.34,203.383c-0.74,2.283-0.342,4.782,1.069,6.723c1.411,1.941,3.666,3.089,6.066,3.089h194.246  c2.4,0,4.654-1.148,6.066-3.089C211.198,208.165,211.595,205.666,210.856,203.383z M106.596,15c28.813,0,52.254,23.444,52.254,52.26  c0,46.04-39.284,79.696-52.262,89.557C93.6,146.983,54.346,113.433,54.346,67.26C54.346,38.444,77.785,15,106.596,15z   M19.789,198.195l20.829-64.277h22.295c17.32,23.623,38.092,37.444,39.58,38.417c1.247,0.815,2.675,1.222,4.104,1.222  c1.429,0,2.857-0.407,4.104-1.222c1.486-0.972,22.261-14.794,39.582-38.417h22.297l20.828,64.277H19.789z"/>
                    </svg></span>
              </div>

              <div
                onClick={() => handleRegionClick('crimea')}
                className="absolute lex justify-center items-center bg-[aqua] w-10 h-10 p-2 rounded-[50%] shadow-lg cursor-pointer hover:scale-105">
                    <span x="250" y="250" textAnchor="middle"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="red" height="20px" width="20px" version="1.1" id="Capa_1" viewBox="0 0 213.195 213.195" xml:space="preserve">
                    <path d="M210.856,203.383l-25.689-79.277c-1.002-3.093-3.884-5.188-7.135-5.188h-18.135c8.12-14.714,13.953-32.089,13.953-51.658  C173.85,30.173,143.68,0,106.596,0c-37.081,0-67.25,30.173-67.25,67.26c0,19.569,5.833,36.944,13.952,51.658H35.164  c-3.252,0-6.132,2.095-7.135,5.188L2.34,203.383c-0.74,2.283-0.342,4.782,1.069,6.723c1.411,1.941,3.666,3.089,6.066,3.089h194.246  c2.4,0,4.654-1.148,6.066-3.089C211.198,208.165,211.595,205.666,210.856,203.383z M106.596,15c28.813,0,52.254,23.444,52.254,52.26  c0,46.04-39.284,79.696-52.262,89.557C93.6,146.983,54.346,113.433,54.346,67.26C54.346,38.444,77.785,15,106.596,15z   M19.789,198.195l20.829-64.277h22.295c17.32,23.623,38.092,37.444,39.58,38.417c1.247,0.815,2.675,1.222,4.104,1.222  c1.429,0,2.857-0.407,4.104-1.222c1.486-0.972,22.261-14.794,39.582-38.417h22.297l20.828,64.277H19.789z"/>
                    </svg></span>
              </div>
          </div>
        </div>

        {gameStatus === 'finished' && (
          <div className="text-center mt-4">
            <p className="text-lg mb-4">
              Гра закінчена! Ваш фінальний рахунок: {score}/{attempts}
            </p>
            <button onClick={resetGame}>Грати знову</button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UkraineQuiz;