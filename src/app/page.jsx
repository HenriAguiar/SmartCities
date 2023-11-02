'use client'

import Container from "@/components/Container"
import { useEffect, useState } from "react"

const Categorias = [{
  id: 1,
  nome: 'Principal',
  subinfo: 'Teste'
},{
  id: 2,
  nome: 'Lanche',
  subinfo: 'Teste'
},{
  id: 3,
  nome: 'Sobremesa',
  subinfo: 'Teste'
},{
  id: 4,
  nome: 'Todos',
  subinfo: 'Teste'
},]





export default function Home() {

  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    setCategorias(Categorias)
  },[])
  return (
    <main className='flex flex-col h-[50vh]'>
      <div className='flex items-center justify-center w-full py-10' >
        <h1 className='font-bold text-3xl'>Categorias Populares</h1>
      </div>

      <div className="px-5 flex gap-8 justify-center items-center ">
        {categorias.map((categoria) => (
            <div key={categoria.id} className="">
              <Container name={categoria.nome} subinfo={categoria.subinfo} />
            </div>
          ))}
      </div>
    </main>
  )
}
