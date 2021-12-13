<template>
<div>
    <p>Login</p>
    <div class="test">
        <form @submit.prevent="login" class="container">
            <input class="textbox" v-model="email" type="email" placeholder="Email" required>
            <input class="textbox" v-model="password" type="password" placeholder="Password" required>
            <input type="submit" class="btn-submit">
        </form>
    </div>

    <!-- <div class="App_Right">
        <div class="content">
            <h1>Login</h1>
            <form @submit.prevent="login">
                <b-form-group label="Email address :" description="We'll never share your email with anyone else.">
                    <b-form-input v-model="email" type="email" placeholder="Enter email" required></b-form-input>
                </b-form-group>
                <b-form-group label="Password :">
                    <b-form-input v-model="password" type="password" placeholder="Enter password" required></b-form-input>
                </b-form-group>

                <div class="content">
                    <b-button type="submit" variant="outline-success" class="button">Login</b-button>
                </div>
            </form>

        </div>
    </div> -->
</div>
</template>

<script>
import store from '../store'
import apilogin from '../service/login'

export default {
    data() {
        return {
            email: '',
            password: '',
            isProcessing: false,
        }
    },

    methods: {
        login() {
            apilogin(this.email, this.password)
                .then((response) => {
                    if (response.status === 401) {
                        this.$swal({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Email or Password invalid!'
                        });
                    } else {
                        return response.json()
                    }
                })
                .then((response) => {
                    store.setUser(response.token)
                    alert('success')
                })
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body {
    height: 100vh;
    width: 100%;
    background-image: linear-gradient(130deg, #1abc9c, #2ecc71);
    display: flex;
    justify-content: center;
    align-items: center;
}

form.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

p {
    text-align: center;
    font-size: 50px;
    color: #fff;
    font-weight: 300;
}

input {
    border: none;
    height: 50px;
    width: 250px;
    margin: 10px 0;
    padding: 0 10px;
    font-size: 1rem;
    outline: none;
    text-align: center;
    border-radius: 5px;
    transition: .5s;
    cursor: pointer;
}

.textbox {
    color: #fff;
    margin: 15px;
    background: rgba(236, 230, 236, 0.2);
    border: 1px solid rgb(248, 248, 248);
}

.textbox::placeholder {
    color: #fff;
}

.textbox:hover,
.textbox:focus {
    background: #fff;
    width: 300px;
    color: #1abc9c;
}

.btn-submit {
    background: #fff;
    color: #1abc9c;
}

.btn-submit:hover {
    background: #fff;
    color: #1abc9c;
    box-shadow: 0 0 10px (rgba(0, 0, 0, 0.1));
}
</style>
