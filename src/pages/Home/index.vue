<template>
  <div>
      <Header />
    <div class="foodListContainer">
        <div class="foodList">
            <Shoplist
                v-for="shop in shopList"
                :key="shop._id"
                :shop="shop"
             />
        </div>
    </div>
  </div>
</template>

<script>
import shopApi from '../../service/shopApi'
import Header from '../../components/Header.vue'
import Shoplist from '../../components/Shoplish.vue'
export default {
    components: {
        Header,
        Shoplist
    },

    data() {
        return {
            isLoading: false,
            shopList: [],
            pageNumber: 1,
            limit: 12,
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
        }
    }
}
</script>

<style>
.foodListContainer {
    padding-bottom: 40px;
}
.foodList {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 24px;
    margin-top: 66px;
}
</style>