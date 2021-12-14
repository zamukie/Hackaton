<template>
<div>
    <div class="headerbar">
        <section class="logo">
            <div>
                <router-link to="/">
                    <img src="../assets/art3.png" alt="art shop" />
                </router-link>
            </div>
        </section>
        <section class="menu">
            <ul>
                <b-avatar src="https://placekitten.com/300/300" size="3rem"></b-avatar>
            </ul>
        </section>
    </div>
</div>
</template>

<script>
// import Navbar from './Navbar.vue'
export default {
    components: {
        // Navbar
    }
}
</script>

<style>
html,
body {
    margin: 0;
    padding: 0;
}

.headerbar {
    display: flex;
    flex-direction: row;
    height: 64px;
    background-image: linear-gradient(130deg, #1abc9c, #2ecc71);
}

.menu {
    flex: 1;
}

.logo {
    flex: 0;
}

.logo div img {
    width: 150px;
    height: 64px;
    object-fit: contain;
}

.menu {
    flex: 1;
    margin-right: 12px;
}

.menu ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
}

.menu ul li {
    margin: 0 12px;
}

/* img {
    width: 100px;
    height: 100px;
}

.logo {
    display: flex;
    flex-direction: row;
}

.header {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 36px;
    background-image: linear-gradient(130deg, #1abc9c, #2ecc71);
}

.navbar {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
}

.search {
    display: flex;
    justify-content: flex-end;
} */
</style>
