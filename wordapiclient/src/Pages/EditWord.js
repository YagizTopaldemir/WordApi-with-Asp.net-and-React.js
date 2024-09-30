import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function EditWord() {
    const [newWord, setNewWord] = useState('');
    const [newWordMean, setNewWordMean] = useState('');
    const [error, setError] = useState('');
    const { id } = useParams();

    const EditWords = async () => {
        const body = {
            id: id,
            wordd: newWord,
            wordmean: newWordMean
        };

        try {
            if (newWord && newWordMean) {
                await axios.put(`http://localhost:5085/api/Words/${id}`, body, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                setNewWord('');
                setNewWordMean('');
                setError(''); 
            } else {
                setError('Please enter both the word and its meaning.');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
            console.error(err); 
        }
    };

    return (
        <div className='min-h-[100vh] flex flex-col items-center mt-10 gap-5'>
              <h1 className=' text-black font-bold text-5xl'>Edit Word</h1>
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
            <button className='w-[300px] h-[50px] bg-green-300 rounded-md text-white' onClick={EditWords}>Edit</button>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
}
