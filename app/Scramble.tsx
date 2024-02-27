'use client';
import { useState, useEffect, useRef } from 'react';

const MAX_ITERATIONS = 100;
const options = ['Fullstack Developer', 'Freelancer', 'Tech Enthusiast', 'Open Source Contributor'];
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const getRandomChar = () => chars[Math.floor(Math.random() * chars.length)];
const getRandomWord = () => options[Math.floor(Math.random() * options.length)];

export const Scramble = () => {
  const [text, setText] = useState(getRandomWord());
  const textRef = useRef(text);

  const animate = async () => {
    textRef.current = text;
    let currentWord = textRef.current;
    let currentCharCount = currentWord.length;
    let currentChar = 0;

    let newWord = getRandomWord();
    while (newWord === currentWord) {
      newWord = getRandomWord();
    }
    let newCharCount = newWord.length;
    let newChar = 1;

    const scramble = (word: string, until: number, skip: number): string => {
      const prefix = word.substring(0, skip);
      const suffix = word.substring(until, currentCharCount);
      const toScramble = until - skip;
      if (toScramble < 0) {
        return word;
      }
      return (
        prefix +
        Array(toScramble)
          .fill(0)
          .map(() => getRandomChar())
          .join('') +
        suffix
      );
    };

    const hide = () => {
      return new Promise((resolve) => {
        let iterations = 0;
        const interval = setInterval(() => {
          if (iterations >= MAX_ITERATIONS || currentChar > currentCharCount) {
            clearInterval(interval);
            resolve(true);
            return;
          }
          
          currentWord = scramble(currentWord, currentChar, 0);
          setText(currentWord);
          currentChar++;
          iterations++;
        }, 100);
      });
    };

    const animation = () => {
      return new Promise((resolve) => {
        let iterations = 0;
        const interval = setInterval(() => {
          if (iterations > 20) {
            clearInterval(interval);
            resolve(true);
            return;
          }
          currentWord = scramble(currentWord, currentCharCount, 0);
          setText(currentWord);
          iterations++;
        }, 100);
      });
    };

    const shrinkChars = () => {

      return new Promise((resolve) => {
        let iterations = 0;
        const interval = setInterval(() => {
          if (iterations > MAX_ITERATIONS) {
            clearInterval(interval);
            resolve(true);
            return;
          }
          if(currentCharCount === newCharCount) {
            console.log('newCharCount', newCharCount);
            console.log('currentCharCount', currentCharCount);
            clearInterval(interval);
            resolve(true);
            return;
          }
          if(currentCharCount > newCharCount) {
            currentWord = scramble(currentWord, currentCharCount, 0).substring(0, currentCharCount--);
          }
          if(currentCharCount < newCharCount) {
            currentWord = scramble(currentWord, currentCharCount, 0) + Array(newCharCount - currentCharCount).fill(0).map(() => getRandomChar()).join('');
          }
          setText(currentWord);
          iterations++;
        }, 100);
      });
    };

    const show = () => {
      
      return new Promise((resolve) => {
        let iterations = 0;
        const interval = setInterval(() => {
          iterations++;
          if (iterations > 500) {
            clearInterval(interval);
            resolve(true);
            return;
          }

          currentWord = scramble(newWord, newCharCount, newChar);
          
          setText(currentWord);

          if (newChar === newCharCount) {
            console.log(currentCharCount, newWord);
            clearInterval(interval);
            resolve(true);
            return;
          }
          newChar++;
        }, 100);
      });
    };

    await hide();
    await animation();
    await shrinkChars();
    await show();
  };

  useEffect(() => {
    animate();
    /* setInterval(() => {
      animate();
    }, 8000); */
  }, []);

  // useEffect(hideText, [textRef.current]);

  /* useEffect(() => {
    

    const interval = setInterval(() => {
      const oldText = textRef.current;
      const currentWord = options[Math.floor(Math.random() * options.length)];
      textRef.current = currentWord;
    }, 2000);
    return () => clearInterval(interval);
  }, []); */

  return <span className="bg-gradient-to-b from-cyan-300 to-cyan-700 bg-clip-text text-transparent">{text}</span>;
};
