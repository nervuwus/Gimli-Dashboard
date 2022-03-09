import { useState, useEffect } from "react";

export default function Discord() {

    const [ data, setData ] = useState(null);

    useEffect(() => {
        fetch("http://localhost:4000/discord")
        .then(req => req.json())
        .then(data => setData(data.user))
    }, []);

    return(
        <div>
            <h1>Hello {!data ? "Loading..." : data}</h1>
        </div>
    )
}
