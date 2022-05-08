import axios from "axios";
import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data.data);
            setIsPending(false);
                setError(null);
        })
            .catch((err) => {
                setError(err.message);
                setIsPending(false);
            });
        return () => console.log("");
    }, [url]);

    return { data, isPending, error };
};

export default useFetch;
