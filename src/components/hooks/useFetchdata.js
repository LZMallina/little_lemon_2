import { useState } from 'react';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const useFetchdata = () =>
{
    const [list, setList] = useState([])
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    //fetch data from our db.json REST-API
         
        const fetchItems = async (url) => {
        try {
            const response = await fetch(url);
            await wait(1000)
            if (!response.ok) throw Error('Expected data not received');
            const listItems = await response.json();
            setList(listItems)
            setFetchError(null)
        }
        catch (err) {
            setFetchError(err.message)
        } finally {
            setIsLoading(false);
        }
    }
    return {isLoading, list, fetchError,fetchItems }
}

export default useFetchdata;