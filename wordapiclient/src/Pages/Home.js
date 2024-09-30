import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const [words,SetWords] = useState([])
    const Navigation = useNavigate();
    useEffect(() => {
        const fetchAllword = async () => {
            const getallword = await axios.get("http://localhost:5085/api/Words")
            const wordData = getallword.data;

            SetWords(wordData);
        }

        fetchAllword()
    }, [])
    

  return (
    <div className='min-h-[100vh]'>
        <div className='min-h-[100vh] flex items-center m-5 flex-col '>
            <h1 className=' text-black font-bold text-5xl'>Words</h1>
            <div className='flex items-center m-5 flex-col gap-10'>
              {words?.map((item) => {
 
                const DeleteWord = async () => {
              await axios.delete(`http://localhost:5085/api/Words/${item.id}`)
              window.location.reload()
              }

              const navigate = () => {
                Navigation(`/editword/${item.id}`)
              }

                return(
                    <div key={item?.id} className=' flex w-[200px] h-[100px] bg-slate-100  gap-1 justify-center items-center  flex-col rounded-[10px]'>
                        <h1 className=' text-black'>{item?.wordd}</h1>
                        <h1 className=' text-black'>{item?.wordmean}</h1>
                        <div className='flex flex-row gap-2'>
                            <button className=' text-red-500 hover:opacity-30 ' onClick={DeleteWord}>Delete</button>
                            <button className=' text-green-400 hover:opacity-30' onClick={navigate}>Edit</button>
                        </div>
                    </div>
                )
              })}
            </div>
        </div>
    </div>
  )
}
