"use client";
import React, { useState, useEffect } from 'react';
import movieData from '@/data/movie_data'; // Adjust import path as per your project structure

const GuessTheMovie: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [movieImage, setMovieImage] = useState('');
  const [movieName, setMovieName] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [lastMovieIndex, setLastMovieIndex] = useState(-1);
  const [showMovieName, setShowMovieName] = useState(false);

  useEffect(() => {
    loadRandomMovie();
  }, []);

  const loadRandomMovie = () => {
    let randomIndex = Math.floor(Math.random() * movieData.length);
    while (randomIndex === lastMovieIndex) {
      randomIndex = Math.floor(Math.random() * movieData.length);
    }
    
    const randomMovie = movieData[randomIndex];
    const shuffledOptions = shuffleOptions([
      randomMovie.movie_name,
      ...getRandomMovieNames(randomIndex, 3)
    ]);
    
    const randomImageUrl = randomMovie.image_url[Math.floor(Math.random() * randomMovie.image_url.length)];
    setMovieImage(randomImageUrl);
    setMovieName(randomMovie.movie_name);
    setOptions(shuffledOptions);
    setLastMovieIndex(randomIndex);

    setFeedbackMessage('');
    setShowMovieName(false);
  };

  const shuffleOptions = (options: string[]) => {
    return options.sort(() => Math.random() - 0.5);
  };

  const getRandomMovieNames = (excludeIndex: number, count: number) => {
    const randomMovies: string[] = [];
    while (randomMovies.length < count) {
      const randomIndex = Math.floor(Math.random() * movieData.length);
      if (randomIndex !== excludeIndex && !randomMovies.includes(movieData[randomIndex].movie_name)) {
        randomMovies.push(movieData[randomIndex].movie_name);
      }
    }
    return randomMovies;
  };

  const handleOptionClick = (selectedMovie: string) => {
    if (loading) return;

    setLoading(true);


      if (selectedMovie === movieName) {
        setOptions((prevOptions) =>
          prevOptions.map((option) =>
            option === selectedMovie ? 'text-green-500' : option
          )
        );
      } else {
        setOptions((prevOptions) =>
          prevOptions.map((option) =>
            option === movieName ? 'text-red-500' : option
          )
        );
      
        setTimeout(() => {
          setShowMovieName(false);
        }, 1000);
      }

      setLoading(false);

      setTimeout(() => {
        loadRandomMovie();
      }, 1500);

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white z-[20]">
      <div className="max-w-screen-lg w-full px-4 z-20">
        <div className="flex flex-col items-center space-y-4">
          <img src={movieImage} alt="Movie Scene" className="w-full max-w-[600px] h-[400px] object-cover" />
          {feedbackMessage && (
            <div className={`text-center ${feedbackMessage.includes('Correct') ? 'text-green-500' : 'text-red-500'}`}>
              {feedbackMessage}
            </div>
          )}
          {showMovieName && (
            <div className="text-white text-xl">{movieName}</div>
          )}
          <div className="flex flex-col items-center sm:flex-row sm:items-center sm:space-x-4">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`px-6 py-2 text-lg font-bold text-white rounded-md transition-colors duration-300 ease-in-out 
                            ${option.includes('green') ? 'bg-green-500' : option.includes('red') ? 'bg-red-500' : 'bg-[#3b3bff] hover:bg-white-700'} 
                            ${loading ? 'opacity-50 cursor-not-allowed' : ''}
                            ${index !== 0 ? 'mt-4 sm:mt-0' : ''}`}
                disabled={loading}
              >
                {option !== 'text-green-500' && option !== 'text-red-500' ? option : movieName}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuessTheMovie;
