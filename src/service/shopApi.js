export default function getShopList(limit, page) {
    return fetch('https://camt-shopapi.pair-co.com/shops/?' + new URLSearchParams({
        limit,
        page,
    }), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
}