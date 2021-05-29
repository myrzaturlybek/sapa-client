<template>
  <div class="h-screen login">
    <div
      class="container mx-auto h-full flex flex-1 justify-center items-center pt-24"
    >
      <div class="w-full max-w-lg">
        <div class="leading-loose">
          <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
            <p class="text-gray-800 font-medium text-center text-lg font-bold">
              Login
            </p>
            <div class="">
              <label class="block text-sm text-gray-00" for="username"
                >Email</label
              >
              <input
                class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email"
                aria-label="email"
                v-model="email"
              />
            </div>
            <div class="mt-2">
              <label class="block text-sm text-gray-600" for="password"
                >Password</label
              >
              <input
                class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                id="password"
                name="password"
                type="password"
                required
                placeholder="*******"
                aria-label="password"
                v-model="password"
              />
            </div>
            <div class="mt-4 items-center justify-between">
              <button
                class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                type="button"
                @click="login()"
              >
                Login
              </button>
            </div>
            <nuxt-link
              class="inline-block right-0 align-baseline font-bold text-sm text-500 hover:text-blue-800"
              to="/register"
            >
              Not registered ?
            </nuxt-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      try {
        const login = await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        await this.$auth.setUser(login.data.user)

        this.$router.push('/charts')
      } catch (e) {
        this.error = e
      }
    },
  },
}
</script>

<style scoped>
.login {
  background: linear-gradient(90deg, #007bee 0%, #03d3da 100%);
}
</style>