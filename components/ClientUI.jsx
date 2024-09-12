"use client"
import React from 'react'
import { Header1 } from '@/components/ui/nav';
import SortForm from './SortForm.jsx';
import ItemList from './itemList.jsx'
import { useState, useEffect } from 'react';

function ClientUI({list, type}) {
    const [info, setInfo] = useState([])
    const [minMoney, setMinMoney] = useState(0)
    const [maxMoney, setMaxMoney] = useState(1000000)

    useEffect(()=>{
        setInfo(list);
    })
    
  return (
    <>
      <Header1 />
      <div className='overflow-x-hidden py-20 lg:py-40 w-full'>
        <h1 className='mb-10 text-4xl underline'><center>{type}</center></h1>
        <div className='lg:grid lg:grid-cols-3'>
          <div className='col-span-1 text-center flex-row w-full p-4'>
            <div className='w-full mb-4'>
              <SortForm list={info} setList={setInfo} minMoney={minMoney} maxMoney={maxMoney} setMinMoney={setMinMoney} setMaxMoney={setMaxMoney}/>
            </div>
          </div>
          <div className='col-span-2'>
            <ItemList list={info}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClientUI