import { useEffect, useState } from "react";

function useCurrencyInfo(Currency) {
    const [data, setdata] = useState({})

    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${Currency}.json`)
            .then((res) => res.json())
            .then((resData) => setdata(resData[Currency]))
            .catch(err => console.log(err))
    }, [Currency]);

    console.log(data);
    return data;
}

export default useCurrencyInfo;
