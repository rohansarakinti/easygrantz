import React from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
import Link from 'next/link';

export default function ItemList({list}) {
  return (
    <div>
        {console.log("in list")}
        {console.log(list)}
        {list.map((grant)=>
                <div className='mb-5 hover:bg-gray-100 duration-200' key={grant.id}>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Link href={grant.grantLink}>
                        <div className='w-full h-auto border-2 border-green-600 grid-rows-2 p-4 rounded-lg'>
                          <div className='row-span-1'>
                            <h1 className='text-2xl font-medium'>{grant.name}</h1>
                          </div>
                          <div className='row-span-1 mt-4'>
                            <p className='text-lg text-gray-600'>Amount of Money: ${grant.moneyMin ? grant.moneyMin : "N/A"} - ${grant.moneyMax ? grant.moneyMax : "N/A"}</p>
                          </div>
                          <div className='row-span-1 grid grid-cols-3 mt-4 gap-4'>
                            <div className='col-span-1'>
                              <p className='text-lg text-gray-600'>Country: {grant.country ? grant.country : "N/A"}</p>
                            </div>
                            <div className='col-span-1'>
                              <p className='text-lg text-gray-600'>State: {grant.state ? grant.state : "N/A"}</p>
                            </div>
                            <div className='col-span-1'>
                              <p className='text-lg text-gray-600'>City: {grant.city ? grant.city : "N/A"}</p>
                            </div>
                          </div>         
                        </div>
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent className='w-flex'>
                      <p>{grant.notes? grant.notes : "No notes."}</p>
                    </HoverCardContent>
                  </HoverCard>
                </div>
        )}
        {console.log("Items done")}
    </div>
  )
}

