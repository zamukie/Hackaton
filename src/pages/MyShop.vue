<template>
<div>
    <Header />
    <Navbar />
    <div class="myShopContainer">
        <div class="myShop">
            <div class="myShopDetail">
                <div class="myShopImage">
                    <img src="../assets/art3.png" alt="">
                </div>
                <b-button variant="danger" @click="logout">Logout</b-button>
            </div>
            <div class="myShopData">
                <section class="shopName">Name :
                    <section class="shopNameApi">
                        {{ name }}
                    </section>
                </section>
                <section class="shopName">Description :
                    <section class="shopNameApi">
                        {{ description }}
                    </section>
                </section>
                <section class="shopName">Category :
                    <section class="shopNameApi">
                        {{ category }}
                    </section>
                </section>
                <section class="shopName">Email :
                    <section class="shopNameApi">
                        {{ email }}
                    </section>
                </section>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Header from '../components/Header.vue'
import Navbar from '../components/Navbar.vue'
import store from '../store'
export default {
    components: {
        Header,
        Navbar
    },
    data() {
        return {
            name: '',
            description: '',
            category: '',
            email: ''
        }
    },
    mounted() {
        this.getMyShop()
    },
    methods: {
        getMyShop() {
            fetch('https://camt-shopapi.pair-co.com/myshop', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${this.$root.state.accessToken}`,
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(response => {
                    this.name = response.name
                    this.description = response.description
                    this.category = response.category
                    this.email = response.email
                })
        },
        logout() {
            this.$swal({
                title: 'Are you sure?',
                text: "You wan't to logout",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$swal(
                        'Success',
                        'You log out finished',
                        'success'
                    )
                    store.logout()
                    this.$router.replace('/')
                }
            })

        },
    }
}
</script>

<style>
.myShopContainer {
    padding-bottom: 40px;
    margin: 0 20px;
}

.myShop {
    display: flex;
    /* grid-template-columns: 1fr 1fr 1fr 1fr; */
    grid-row-gap: 40px;
    grid-column-gap: 24px;
    margin-top: 20px;
    justify-content: center;
}

.myShopDetail {
    box-shadow: 0px 0px 12px #EEE;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.myShopDetail:hover {
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 0px 32px #CCC;
}

.myShopDetail .myShopImage img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
}

.myShopDetail .myShopData {
    padding: 16px 18px;
    padding-top: 12px;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.myShopData .shopDetail {
    padding: 16px 18px;
    padding-top: 12px;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.myShopData .shopName {
    font-weight: bold;
    color: #333;
    font-size: 1.2rem;
}

.myShopData .shopNameApi {
    font-weight: bold;
    color: #1abc9c;
    font-size: 1.2rem;
    margin-left: 10px;
}
</style>
