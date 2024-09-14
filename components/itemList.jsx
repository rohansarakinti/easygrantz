import React from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
import Link from 'next/link';

export default function ItemList({list, minMoney, maxMoney, location}) {
  return (
    <div>
        {list.filter((item)=>{return item.moneyMin>=minMoney && item.moneyMax<=maxMoney}).filter((item)=>{return location.toLowerCase() === '' ? item : (item.country ? item.country.toLowerCase().includes(location.toLowerCase()) : false) || (item.state ? item.state.toLowerCase().includes(location.toLowerCase()) : false) || (item.city ? item.city.toLowerCase().includes(location.toLowerCase()) : false)}).map((item)=>
                <div className='mb-5 hover:bg-gray-100 duration-200' key={item.id}>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Link href={`${item.grantLink}`}>
                        <div className='w-full h-auto border-2 border-green-600 grid-rows-2 p-4 rounded-lg'>
                          <div className='row-span-1'>
                            <h1 className='text-2xl font-medium'>{item.name}</h1>
                          </div>
                          <div className='row-span-1 mt-4'>
                            <p className='text-lg text-gray-600'>Amount of Money: ${item.moneyMin ? item.moneyMin : "N/A"} - ${item.moneyMax ? item.moneyMax : "N/A"}</p>
                          </div>
                          <div className='row-span-1 grid grid-cols-3 mt-4 gap-4'>
                            <div className='col-span-1'>
                              <p className='text-lg text-gray-600'>Country: {item.country ? item.country : "N/A"}</p>
                            </div>
                            <div className='col-span-1'>
                              <p className='text-lg text-gray-600'>State: {item.state ? item.state : "N/A"}</p>
                            </div>
                            <div className='col-span-1'>
                              <p className='text-lg text-gray-600'>City: {item.city ? item.city : "N/A"}</p>
                            </div>
                          </div>         
                        </div>
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent className='w-flex'>
                      <p>{item.notes? item.notes : "No notes."}</p>
                    </HoverCardContent>
                  </HoverCard>
                </div>
        )}
    </div>
  )
}

