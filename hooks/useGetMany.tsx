import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface Props {
    route: string
}

const useGetMany = (props: Props) => {
    const url = "https://jsonplaceholder.typicode.com/todos/1"
    const [data, setData] = useState<any[]>()

    useEffect(() => {
        axios.get(url).then(result => setData(result.data)).catch(err=> console.log(err))
    }, [])

    return data ? data : "Loading"
}

export default useGetMany;