<template>
<nav class="navbar">
    <ul>
        <li :class="listClass">
            <router-link to="/">
                หน้าหลัก
            </router-link>
        </li>
        <li :class="memberClass">
            <router-link to="/createshop">
                สมัครสมาชิก
            </router-link>
        </li>
        <li :class="cartClass">
            <router-link to="/login">
                เข้าสู่ระบบ
            </router-link>
        </li>
    </ul>
</nav>
</template>

<script>
export default {

}
</script>

<style>
.navbar {
    display: flex;
    /* flex-direction: row; */
    /* justify-content: flex-end; */
    /* margin-top: -40px; */
}

.navbar ul {
    display: flex;
    flex-direction: row;
    list-style: none;
}

/* .navbar ul li a {
    margin: 0 8px;
    padding: 2px 28px;
    line-height: 30px;
    background-color: #EEE;
    border-radius: 16px;
    color: #555;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    position: relative;
    display: block;
    text-decoration: none;
} */

.navbar ul li a:hover {
    background-color: #F8EAEA;
    box-shadow: 0px 0px 10px #EEE;
}

.navbar ul li.active a {
    background-color: #9A0606;
    color: #FFF;
    font-weight: bold;
    box-shadow: 0px 0px 10px #CCC;
}
</style>
