import React from 'react'
import {loadData} from '../../lib/dataAPI'
import ClientUI from '../../components/ClientUI';


async function page() {
    const data = await loadData("microloans")
    return (
        <ClientUI data={data} type={"Microloans"} />
    )
}

export default page