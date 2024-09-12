"use client"
import { createClient } from '@/lib/supabase'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Header1 } from '@/components/ui/nav';
import ItemList from '@/components/itemList';
import { useState, useEffect } from 'react'; 

export default async function Page() {

  const [grants, setGrants] = useState([])
  const [minMoney, setMinMoney] = useState(0)
  const [maxMoney, setMaxMoney] = useState(1000000)

  
  async function loadData(){
    const supabase = createClient()

        
    let { data , error } = await supabase.from('grants').select()

    if(error) 
    {
      console.log(error)
      return <p>{JSON.stringify(error)}</p>;
    }

    setGrants(data)
    return;
  }

  function sortDataAscending(){
    grants.sort((a,b)=>{a.moneyMin-b.moneyMin})
    console.log("sorted ascending")
  }

  function sortDataDescending(){
    grants.sort((a,b)=>{b.moneyMin-a.moneyMin})
    console.log("sorted descending")
  }

  function filterMoney(){
    grants.filter((item)=>{return item.moneyMin>=minMoney && item.moneyMax<=maxMoney})
  }


  useEffect(()=>{
    loadData();
  }, [])
  
  return(
    <>
      <Header1 />
      <div className='overflow-x-hidden py-20 lg:py-40 w-full'>
        <h1 className='mb-10 text-4xl underline'><center>Grants</center></h1>
        <div className='lg:grid lg:grid-cols-3'>
          <div className='col-span-1 text-center flex-row w-full p-4'>
            {/* <div className='w-full mb-4'>
              <form>
                <div>
                  <label htmlFor='moneyMin'>Minimum Money</label>
                  <input type="number" name="moneyMin" id="moneyMin" min="0" defaultValue={0} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                </div>
                <div className='mt-5'>
                  <label htmlFor='moneyMax'>Maximum Money</label>
                  <input type="number" name="moneyMax" id="moneyMax" min="0" defaultValue={100000} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                </div>
                <div className='mt-5'>
                  <label htmlFor='location'>Location</label>
                  <input type="text" name="location" id="location" min="0" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                </div>
              </form>
            </div> */}
            <div className='w-full mb-4'>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className='w-full h-[10vh] border-green-600 border-2 text-lg text-wrap' disabled>Money Sorting/Filtering (Temporarily Disabled)</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Set sorting and filtering for money amounts.
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="minMoney">Minimum Money</Label>
                        <Input
                          id="minMoney"
                          defaultValue=""
                          className="col-span-2 h-8"
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="maxMoney">Maximum Money</Label>
                        <Input
                          id="maxMoney"
                          defaultValue=""
                          className="col-span-2 h-8"
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="height">Sorting</Label>
                        <RadioGroup defaultValue="descending">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="ascending" id="r1" />
                            <Label htmlFor="r1">Ascending</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="descending" id="r2" />
                            <Label htmlFor="r2">Descending</Label>
                          </div>
                      </RadioGroup>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <div className='w-full'>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className='w-full h-[10vh] border-green-600 border-2 text-lg' disabled>Location (Temporarily Disabled)</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Set specific locations.
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="country">Country</Label>
                        <Input
                          id="country"
                          defaultValue=""
                          className="col-span-2 h-8"
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          defaultValue=""
                          className="col-span-2 h-8"
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          defaultValue=""
                          className="col-span-2 h-8"
                        />
                      </div> 
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className='col-span-2'>
            <ItemList list={grants} />
          </div>
        </div>
      </div>
    </>
  );
}