<template>
  <div>
    <Header />
    <Navbar />
    <div class="shopListContainer">
        <div class="showShopList">
            <Shoplist
                v-for="shop in shopList"
                :key="shop._id"
                :shop="shop"
             />
        </div>
    </div>
    <!-- <div>
        <button
        v-for="page in totalPage"
        :key="page"
        @click="updatePageNumber(page)"
        >
            {{ page }}
        </button>
    </div> -->
    <div class="pagination" v-if="totalPage">
        <MyButton
            v-for="page in totalPage"
            :key="page"
            @click="updatePageNumber(page)"
            :text="page"
            :class="{ 'active': page === pageNumber }"
        />
    </div>
  </div>
</template>

<script>
import shopApi from '../../service/shopApi'
import Header from '../../components/Header.vue'
import Shoplist from '../../components/Shoplish.vue'
import MyButton from '../../components/MyButton.vue'
import Navbar from '../../components/Navbar.vue'
export default {
    components: {
        Header,
        Navbar,
        Shoplist,
        MyButton
    },

    data() {
        return {
            isLoading: false,
            shopList: [],
            pageNumber: 1,
            limit: 4,
            total: 0
        }
    },

    watch: {
        pageNumber() {
            this.getShopList()
        }
    },

    mounted() {
        this.isLoading = true
        this.getShopList()
    },

    computed: {
        totalPage() {
            return this.total > 0 ? Math.floor(this.total / this.limit) : 0
        }
    },

    methods: {
        getShopList() {
            // fetch(`https://camt-shopapi.pair-co.com/shops/?limit=${this.limit}&offset=${this.pageNumber -1}`, {
            //     method: 'GET',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // })
            // .then(response => response.json())
            // .then(data => {
            //     this.shopList = data.data
            //     this.total = data.total
            // })
            shopApi(this.limit, this.pageNumber)
            .then((shopList) => {
                console.log(shopList);
                this.shopList = shopList.data
                this.total = shopList.total
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            })
        },
        updatePageNumber(page) {
            this.pageNumber = page
            this.getShopList()
        }
    }
}
</script>

<style>
.shopListContainer {
    padding-bottom: 40px;
    margin: 0 20px;
}
.showShopList {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 24px;
    margin-top: 20px;
}
.pagination {
    display: flex;
    justify-content: center;
    padding: 0 0 56px;
}
.pagination button {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin: 0 4px;
}
.pagination button.active {
    background-color: #1abc9c;
    border: 1px solid #fff;
    color: #FFF;
    font-weight: bold;
}
</style>