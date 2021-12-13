<template>
<div>
    <div class="register">
        <p>Create Shop</p>
        <div class="test">
            <form @submit.prevent="createShop" class="container">
                <input class="textbox" v-model="name" type="text" placeholder="Name" required>
                <input class="textbox" v-model="description" type="text" placeholder="Descrioption" required>
                <input class="textbox" v-model="category" type="text" placeholder="Category" required>
                <input class="textbox" v-model="email" type="email" placeholder="Eamil" required>
                <input class="textbox" v-model="password" type="password" placeholder="Password" required>
                <input type="submit" class="btn-submit">
            </form>
        </div>
    </div>
</div>
</template>

<script>
import createShop from '../service/createshop'

export default {
    data() {
        return {
            name: '',
            description: '',
            category: '',
            email: '',
            password: '',
        }
    },

    methods: {
        createShop() {
            const data = {
                name: this.name,
                description: this.description,
                category: this.category,
                email: this.email,
                password: this.password
            }
            createShop(data)
                .then((response) => JSON.stringify(response))
                .then(data => {
                    console.log('data', data);
                    this.$swal({
                        icon: 'success',
                        title: 'Success',
                        text: 'Register is success'
                    });
                })
            this.$router.push('/login')
        }
    }
}
</script>

<style>
.register {
    height: 100vh;
    width: 100%;
    background-image: linear-gradient(130deg, #1abc9c, #2ecc71);
    display: flex;
    flex-direction: column;
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
