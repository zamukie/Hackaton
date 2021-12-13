export default function login(email, password) {
    return fetch('https://camt-shopapi.pair-co.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
        .then(response => response)
}