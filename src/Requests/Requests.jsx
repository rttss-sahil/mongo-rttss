const Requests = {
    GET: (url) => fetch('http://localhost:5000/' + url, {
        method: "GET",
    }),
    POST: (url, body) => fetch('http://localhost:5000/' + url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export default Requests;