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
        <section class="search">
            <div class="searchItem">
                <input class="searchInput" type="text" placeholder="Search...">
                <button class="btn-search"><b-icon icon="search" font-scale="2.5"></b-icon></button>
            </div>
        </section>
        <section class="menu">
            <ul>
                <router-link to="/createshop">
                    <li>Create Shop</li>
                </router-link>
                <router-link to="/login">
                    <li>Login</li>
                </router-link>
            </ul>
        </section>
    </div>
    <div>
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
.search {
    flex: 1;
}
.search .searchItem {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
}
.search .searchInput {
   margin: 6px;
   color: #fff;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(248, 248, 248);
}
.searchInput::placeholder {
    color: #1abc9c;
}

.searchInput:hover,
.searchInput:focus {
    background: #fff;
    width: 300px;
    color: #1abc9c;
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
.btn-search {
    background: #1abc9c;
    color: #fff;
     /* padding: 12px 0; */
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
}

.btn-search:hover {
    background: #fff;
    color: #1abc9c;
    box-shadow: 0 0 10px (rgba(0, 0, 0, 0.1));
}
</style>
