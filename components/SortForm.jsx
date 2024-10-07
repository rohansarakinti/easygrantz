import React from 'react'

function SortForm({minMoney, maxMoney, setMinMoney, setMaxMoney, location, setLocation}) {

  return (
    <form>
        <div>
            <label htmlFor='moneyMin'>Minimum Money</label>
            <input type="number" name="moneyMin" id="moneyMin" min="0" defaultValue={0} value={minMoney} onChange={(e)=>{setMinMoney(e.target.value)}} className="block py-2.5 px-0 w-full text-sm text-grey-500 bg-transparent border-0 border-b-2 border-green-600 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
        </div>
        <div className='mt-5'>
            <label htmlFor='moneyMax'>Maximum Money</label>
            <input type="number" name="moneyMax" id="moneyMax" min="0" defaultValue={100000} value={maxMoney} onChange={(e)=>{setMaxMoney(e.target.value)}}className="block py-2.5 px-0 w-full text-sm text-grey-500 bg-transparent border-0 border-b-2 border-green-600 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
        </div>
        <div className='mt-5'>
            <label htmlFor='location'>Location</label>
            <input type="text" name="location" id="location" value={location} onChange={(e)=>{setLocation(e.target.value)}} className="block py-2.5 px-0 w-full text-sm text-grey-500 bg-transparent border-0 border-b-2 border-green-600 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
        </div>
        {/* <div className='mt-5'>
            <label>Sorting</label>
            <input type="radio" name="sorting" id="sorting" className="block py-2.5 px-0 w-full text-sm text-grey-500 bg-transparent border-0 border-b-2 border-green-600 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" />    
        </div> */}
    </form>
  )
}

export default SortForm