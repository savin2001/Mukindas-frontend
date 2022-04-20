import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          })
            .then((res) => {
                if (!res.ok) {
                    throw Error(
                        "Resource not found. Check your API to ensure it is ok."
                    );
                }
                return res.json();
                
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setIsPending(false);
            });
        return () => console.log("clean up");
    }, [url]);

    return { data, isPending, error };
};

export default useFetch;
