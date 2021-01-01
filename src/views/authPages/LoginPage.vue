<template>
  <section class="login-page container mx-auto text-center py-10">
    <button
      class="inline-flex flex-grow items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-black focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
      @click="loginWithGithub"
      :disabled="pendingSignup"
      :class="{'cursor-not-allowed': pendingSignup}">
      <svg v-if="pendingSignup" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Login with Github
    </button>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LoginPage',
  data: () => ({
    pendingSignup: false,
  }),
  created() {
    if(this.$route.name === 'authGithubSuccess') {
      if(this.$route.query.tmp_token) {
        localStorage.setItem('tmp_token', this.$route.query.tmp_token)
      }
      // TODO: test on mobile devices
      self.close()
    }
  },
  methods: {
    loginWithGithub() {
      const url = `${process.env.VUE_APP_API_URL}/auth/github`
      const name = 'github Login'
      const specs = 'width=500,height=500'
      // only for dev
      // localStorage.removeItem('tmp_token')

      window.addEventListener('storage', this.readStorage)

      window.open(url, name, specs)
      this.pendingSignup = true

    },
    readStorage({ key }) {
      if(key === 'tmp_token') {
        this.getSessionByTmpToken()
        window.removeEventListener('storage', this.readStorage)
      }
    },
    getSessionByTmpToken() {
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('tmp_token')}` },
      }
      const self = this
      // TODO: move to vuex
      axios('http://localhost:3000/auth/session_token', config)
      .then(({ data }) => {
        // handle success
        self.pendingSignup = false
        localStorage.setItem('token', data.token)
        localStorage.removeItem('tmp_token')
      })
      .catch((error) => {
        // handle error
        console.log(error)
      })
    },
  },
}
</script>
