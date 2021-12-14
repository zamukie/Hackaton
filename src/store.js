const store = {
    state: {
        accessToken: null,
    },

    setUser(token) {
        this.state.accessToken = token
        localStorage.setItem('token', JSON.stringify(this.state))
    }
}

export default store