import { createClient } from '@/utils/supabase/server'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Header1 } from '@/components/ui/nav';



export default async function Page() {

  const supabase = createClient()

    
  let { data: microloans , error } = await supabase.from('microloans').select()

  if(error) 
  {
    console.log(error)  
    return <p>{JSON.stringify(error)}</p>;
  }

  return(
    <>
      <Header1 />
      <div className='overflow-x-hidden py-20 lg:py-40 w-full'>
        <h1 className='mb-10 text-4xl underline'><center>Microloans</center></h1>
        <div className='lg:grid lg:grid-cols-3'>
          <div className='col-span-1 text-center flex-row w-full p-4'>
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
                {microloans?.map((microloan:any)=>
                <div className='mb-5 hover:bg-gray-100 duration-200' key={microloan.id}>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Link href={microloan.grantLink}>
                        <div className='w-full h-auto border-2 border-green-600 grid-rows-2 p-4 rounded-lg'>
                          <div className='row-span-1'>
                            <h1 className='text-2xl font-medium'>{microloan.name}</h1>
                          </div>
                          <div className='row-span-1 mt-4'>
                            <p className='text-lg text-gray-600'>Amount of Money: ${microloan.moneyMin ? microloan.moneyMin : "N/A"} - ${microloan.moneyMax ? microloan.moneyMax : "N/A"}</p>
                          </div>
                          <div className='row-span-1 grid grid-cols-3 mt-4 gap-4'>
                            <div className='col-span-1'>
                              <p className='text-lg text-gray-600'>Country: {microloan.country ? microloan.country : "N/A"}</p>
                            </div>
                            <div className='col-span-1'>
                              <p className='text-lg text-gray-600'>State: {microloan.state ? microloan.state : "N/A"}</p>
                            </div>
                            <div className='col-span-1'>
                              <p className='text-lg text-gray-600'>City: {microloan.city ? microloan.city : "N/A"}</p>
                            </div>
                          </div>         
                        </div>
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent className='w-flex'>
                      <p>{microloan.notes? microloan.notes : "No notes."}</p>
                    </HoverCardContent>
                  </HoverCard>
                </div>
                )}
          </div>
        </div>
      </div>
    </>
  );
}