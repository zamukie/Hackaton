<template>
<div class="shopList">
    <section class="shopImage">
        <div v-if="!shop.photo">
            <img src="../assets/art3.png" alt="">
        </div>
        <div v-else>
            <img :src="'https://camt-shopapi.pair-co.com' + shop.photo" />
        </div>
    </section>
    <section class="shopDetail">
        <section class="shopName">{{ shop.name }}</section>
        <section class="shopDescription">{{ shop.description }}</section>
        <section class="shopCategory">{{ shop.category }}</section>
    </section>
    <section class="shopAction">
        <button @click="viewDetail()">
            View Detail
        </button>
    </section>
</div>
</template>

<script>
export default {
    props: ['shop'],

    methods: {
        viewDetail() {

            this.$router.push('/shopdetail')
        }
    }
}
</script>

<style>
.shopList {
    box-shadow: 0px 0px 12px #EEE;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    display: flex;
    flex-direction: column;
}

.shopList:hover {
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 0px 32px #CCC;
}

.shopList .shopImage img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
}

.shopList .shopDetail {
    padding: 16px 18px;
    padding-top: 12px;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.shopList .shopName {
    font-weight: bold;
    color: #333;
    font-size: 1.2rem;
}

.shopList .shopDescription {
    color: #888;
    font-weight: lighter;
    line-height: 100%;
    font-size: 0.95rem;
    flex: 1;
}

.shopList .shopCategory {
    color: #1abc9c;
    font-weight: bold;
    opacity: 0.5;
    margin-top: 12px;
    font-size: 1.5rem;
}

.shopList .shopAction button {
    background-color: #FFF;
    border: 1px solid #1abc9c;
    width: 100%;
    height: 32px;
    color: #1abc9c;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}

.shopList .shopAction button:hover {
    background-color: #1abc9c;
    border: 1px solid #1abc9c;
    color: #FFF;
    font-weight: bold;
}
</style>
