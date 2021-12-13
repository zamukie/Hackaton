export default function createshop(data) {
    return fetch('https://camt-shopapi.pair-co.com/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response)
}