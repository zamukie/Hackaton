const store = {
    state: {
        accessToken: null,
        isLoggedIn: false
    },

    setUser(token) {
        this.state.accessToken = token
        localStorage.setItem('token', JSON.stringify(this.state))
    },
    logout() {
        this.state.accessToken = null
        localStorage.setItem('token', JSON.stringify(this.state))
    },
    initial() {
        const data = localStorage.getItem('token')
        if(data) {
            this.state.accessToken = (JSON.parse(data)).accessToken
        } 
    }
}

export default store