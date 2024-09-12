import React from 'react'

function SortForm({list, setList, minMoney, maxMoney, setMinMoney, setMaxMoney}) {
  return (
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
  )
}

export default SortForm