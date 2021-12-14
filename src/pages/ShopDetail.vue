<template>
<div>
    <Header />
    <Navbar />
    <div class="shopDetailContainer">
        <div class="showShopDetail">
            <div class="eachShopDetail">
                <div class="ShopDetailImage">
                    <img src="../assets/art3.png" alt="">
                </div>
                <div class="dataDetail">
                    Hello
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Header from '../components/Header.vue'
import Navbar from '../components/Navbar.vue'
export default {
    components: {
        Header,
        Navbar
    },
    data() {
        return {

        }
    },
    mounted() {
        this.test()
    },
    methods: {
        test() {
            fetch('https://camt-shopapi.pair-co.com/shops/?', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => { console.log(response); })
        }
    }
}
</script>

<style>
.shopDetailContainer {
    padding-bottom: 40px;
    margin: 0 20px;
}

.showShopDetail {
    display: flex;
    /* grid-template-columns: 1fr 1fr 1fr 1fr; */
    grid-row-gap: 40px;
    grid-column-gap: 24px;
    margin-top: 20px;
    justify-content: center;
}

.eachShopDetail {
    box-shadow: 0px 0px 12px #EEE;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.eachShopDetail:hover {
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 0px 32px #CCC;
}

.eachShopDetail .ShopDetailImage img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
}

.eachShopDetail .dataDetail {
    padding: 16px 18px;
    padding-top: 12px;
    flex: 1;
    display: flex;
    flex-direction: column;
}
</style>
