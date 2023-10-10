'use client'
import React, { useEffect, useState } from 'react'
import valorant from '@/data/valorantApi'
function valorantizar() {
    const [dados, setDados] = useState('');
    useEffect(() =>{
      const valorantFetch = async () =>{
        try{
            const datas = await valorant();
            setDados(datas);
            console.log(datas);
          }catch(e){
            throw e
          }
      };
      valorantFetch()  
    })
  return (
    <div>
        {
           data.map() => (

           )
        }
    </div>
  )
}

export default valorantizar