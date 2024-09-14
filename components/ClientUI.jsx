"use client"
import React from 'react'
import { Header1 } from '@/components/ui/nav';
import SortForm from './SortForm.jsx';
import ItemList from './itemList.jsx'
import { useState, useEffect } from 'react';

function ClientUI({data, type}) {
    const [list, setList] = useState([])
    const [minMoney, setMinMoney] = useState(0)
    const [maxMoney, setMaxMoney] = useState(1000000)
    const [location, setLocation] = useState('');

    useEffect(()=>{
        setList(data);
    }, [])
    
  return (
    <>
      <Header1 />
      <div className='overflow-x-hidden py-20 lg:py-40 w-full'>
        <h1 className='mb-10 text-4xl underline'><center>{type}</center></h1>
        <div className='lg:grid lg:grid-cols-3'>
          <div className='col-span-1 text-center flex-row w-full p-4'>
            <div className='w-full mb-4'>
              <SortForm minMoney={minMoney} maxMoney={maxMoney} setMinMoney={setMinMoney} setMaxMoney={setMaxMoney} location={location} setLocation={setLocation}/>
            </div>
          </div>
          <div className='col-span-2'>
            <ItemList list={list} minMoney={minMoney} maxMoney={maxMoney} location={location}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClientUI