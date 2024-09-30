import axios from 'axios';
import React, { useState } from 'react';

export default function AddWord() {
    const [newWord, setNewWord] = useState('');
    const [newWordMean, setNewWordMean] = useState('');
    const [error, setError] = useState('');

    const addWord = async () => {
        const body = {
            wordd: newWord,
            wordmean: newWordMean,
        };

        try {
            if (newWord && newWordMean) {
                await axios.post("http://localhost:5085/api/Words", body);
                setNewWord('');
                setNewWordMean('');
                setError(''); 
            } else {
                setError('Please enter both the word and its meaning.');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className='min-h-[100vh] flex flex-col items-center mt-10 gap-5'>
              <h1 className=' text-black font-bold text-5xl'>Add Word</h1>
            <input
                type='text'
                placeholder='Word'
                value={newWord}
                onChange={(e) => setNewWord(e.target.value)}
                className='w-[300px] h-[50px] bg-slate-100 pl-2 rounded-md text-black outline-none'
            />
            <input
                type='text'
                placeholder='WordMean'
                value={newWordMean}
                onChange={(e) => setNewWordMean(e.target.value)}
                className='w-[300px] h-[50px] bg-slate-100 pl-2 rounded-md text-black outline-none'
            />
            <button className='w-[300px] h-[50px] bg-green-300 rounded-md text-white' onClick={addWord}>Add</button>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
}
