'use client'
import React, { useEffect, useState } from 'react'
import conselho from '@/data/conselhoAula'
function ConselhoTds() {
  const [dadosApi, setDadosApi] = useState('');
  console.log(conselho);
  useEffect(() =>{
    const conselhosFetch = async () =>{
      try{
        const dados = await conselho();
        setDadosApi(dados);
        console.log(dados)
      }catch(e){
        throw e
      }
    };
    conselhosFetch()
  })
  return (
    <div>
      {
        dadosApi ? (
          <p>{conselho}</p>
          
        ) : (
          <p>carregando</p>
        )
      }
    </div>
  )
}

export default ConselhoTds