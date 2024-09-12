import React from 'react'
import {loadData} from '../../lib/dataAPI'
import ClientUI from '../../components/ClientUI';

async function page() {
    const data = await loadData("grants")
    return (
        <ClientUI list={data} type={"Grants"} />
    )
}

export default page