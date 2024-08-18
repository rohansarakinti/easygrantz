import { createClient } from '@/utils/supabase/server'
import { useState } from 'react'
import { redirect } from 'next/navigation';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

 
import Link from 'next/link';


export default async function Page() {

  const supabase = createClient()

    
  let { data: grants , error } = await supabase.from('grants').select()

  if(error) 
  {
    console.log(error)
    return <p>{JSON.stringify(error)}</p>;
  }

  return(
    <div className=' overflow-x-hidden'>
      <div className='w-screen items-center h-[10vh] p-9'>
        <center><h1 className='text-4xl text-green-500 font-semibold underline-offset-8 underline'>Easygrantz Database</h1></center>
      </div>
      <Tabs defaultValue='grants' className='p-9 mb-40'>
        <TabsContent value='grants'>
          {grants?.map((grant:any)=>
          <div className='mb-5' key={grant.id}>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Link href={grant.grantLink}>
                  <div className='w-full h-flex lg:h-[18vh] border-2 border-green-600 grid-rows-2 p-4 rounded-lg'>
                    <div className='row-span-1'>
                      <h1 className='text-2xl font-medium'>{grant.name}</h1>
                    </div>
                    <div className='row-span-1 mt-4'>
                      <p className='text-lg text-green-500'>Amount of Money: ${grant.moneyMin} - ${grant.moneyMax}</p>
                    </div>
                    <div className='row-span-1 grid grid-cols-3 mt-4 gap-4'>
                      <div className='col-span-1'>
                        <p className='text-lg text-green-500'>Country: {grant.country ? grant.country : "N/A"}</p>
                      </div>
                      <div className='col-span-1'>
                        <p className='text-lg text-green-500'>State: {grant.state ? grant.state : "N/A"}</p>
                      </div>
                      <div className='col-span-1'>
                        <p className='text-lg text-green-500'>City: {grant.city ? grant.city : "N/A"}</p>
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
          {/* <div>
            {
              grants?.map((grant:any)=>
                <div key={grant.id}>
                  <h1>{grant.name}</h1>
                </div>
              )
            }
          </div> */}
        </TabsContent>
        <TabsContent value='loans'>
          <div className='items-center justify-center text-center'>
            <h1 className='text-7xl text-green-500'>Coming Soon!</h1>
          </div>
        </TabsContent>
        <TabsList className='w-full h-[15vh] fixed bottom-0 left-0 bg-green-500'>
          <TabsTrigger value="grants" className='text-3xl hover:text-white mr-10 p-5'>Grants</TabsTrigger>
          <TabsTrigger value="loans" className='text-3xl hover:text-white l-10 p-5'>Microloans</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}