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
            console.log(dados);
          }catch(e){
            throw e
          }
      };
      valorantFetch()  
    })
  return (
    <div>
        <h1>API Data</h1>
        {
           dados ?(
           <p>funcionando</p>
               
           ) : (
                <p>carregando...</p>
           )
        }
    </div>
  )
}

export default valorantizar