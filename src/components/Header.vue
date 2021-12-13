<template>
<header class="header">
    <section class="logo">
        <router-link to="/">
            <img src="../assets/logo.png" alt="Fat Food" />
        </router-link>
        <Navbar />
        <!-- <div class="search">
            <b-form-group label="Filter" label-for="filter-input" label-cols-sm="3" label-align-sm="right" label-size="sm" class="mb-0">
                <b-input-group size="sm">
                    <b-form-input id="filter-input" v-model="filter" type="search" placeholder="Type to Search"></b-form-input>

                    <b-input-group-append>
                        <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                    </b-input-group-append>
                </b-input-group>
            </b-form-group>
        </div> -->

    </section>

</header>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
    components: {
        Navbar
    }
}
</script>

<style>
img {
    width: 100px;
    height: 100px;
}
.logo {
    display: flex;
    flex-direction: row;
}

.header {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* margin-bottom: 36px; */
    background-image: linear-gradient(130deg, #1abc9c, #2ecc71);
}

.search {
    display: flex;
    justify-content: flex-end;
}
</style>
