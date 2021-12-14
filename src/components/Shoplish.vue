<template>
<div class="foodVertical">
    <section class="foodImage">
        <img :src="'https://camt-shopapi.pair-co.com' + shop.photo" />
    </section>
    <section class="foodDescription">
        <section class="foodName">{{ shop.name }}</section>
        <section class="foodShopName">{{ shop.description }}</section>
        <section class="foodPrice">{{ shop.category }}</section>
    </section>
</div>
</template>

<script>
export default {
 props: ['shop']
}
</script>

<style>
.foodVertical {
    box-shadow: 0px 0px 12px #EEE;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    display: flex;
    flex-direction: column;
}

.foodVertical:hover {
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 0px 32px #CCC;
}

.foodVertical .foodImage img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
}
.foodVertical .foodDescription {
    padding: 16px 18px;
    padding-top: 12px;
    flex: 1;
    display: flex;
    flex-direction: column;
}
.foodVertical .foodName {
    font-weight: bold;
    color: #333;
    font-size: 1.2rem;
}
.foodVertical .foodShopName {
    color: #888;
    font-weight: lighter;
    line-height: 100%;
    font-size: 0.95rem;
    flex: 1;
}

.foodVertical .foodPrice {
    color: #9A0606;
    font-weight: bold;
    opacity: 0.5;
    margin-top: 12px;
    font-size: 1.5rem;
}
</style>
