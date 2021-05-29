<template>
  <div class="h-screen login">
    <div
      class="container mx-auto h-full flex flex-1 justify-center items-center pt-24"
    >
      <div class="w-full max-w-lg">
        <div class="leading-loose">
          <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
            <p class="text-gray-800 font-medium text-center text-lg font-bold">
              Register
            </p>
            <div class="mt2">
              <label class="block text-sm text-gray-00" for="username"
                >First name</label
              >
              <input
                class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                id="firstName"
                name="firstName"
                type="text"
                required
                placeholder="First name"
                aria-label="firstName"
                v-model="firstName"
              />
            </div>
            <div class="mt2">
              <label class="block text-sm text-gray-00" for="username"
                >Last name</label
              >
              <input
                class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                id="lastName"
                name="lastName"
                type="text"
                required
                placeholder="Last name"
                aria-label="lastName"
                v-model="lastName"
              />
            </div>
            <div class="mt2">
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
                @click="register()"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  auth: 'guest',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  },
  methods: {
    async register() {
      try {
        await this.$axios.post('auth/register', {
          firstName: this.firstName,
          lastName: this.lastName,
          password: this.password,
          email: this.email,
        })
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