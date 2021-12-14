export default function getShopList(limit, offset) {
    return fetch('https://camt-shopapi.pair-co.com/shops/?' + new URLSearchParams({
        limit,
        offset,
    }), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
}