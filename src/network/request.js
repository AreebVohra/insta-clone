export default class Request {
    constructor() { }

    async sendPostRequestAsync(url, body) {
        try {
            const response = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(body)
            })
            return await response.json();
        } catch (error) {
            alert(error)
        }
    }
}