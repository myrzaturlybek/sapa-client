<template>
  <nav :class="headerClassList" class="fixed w-full z-30 top-0">
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
    >
      <div class="pl-4 flex items-center">
        <logo :isStickable="true" :isSticky="isSticky" />
      </div>
      <!-- <div class="block lg:hidden pr-4">
        <button
          class="flex items-center p-1 text-orange-800 hover:text-gray-900"
          @click.prevent.stop="onToggleClick"
        >
          <svg
            class="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div> -->

      <div class="flex items-center w-auto block mt-0 text-black p-4 p-0 z-20">
        <ul class="list-reset lg:flex justify-end flex-1 items-center"></ul>
        <nuxt-link
          v-show="!auth.loggedIn"
          :class="navActionClassList"
          class="mx-auto mx-0 hover:bg-gray-800 hover:text-white font-bold rounded-full mt-0 py-4 px-8"
          to="/login"
        >
          Sign In
        </nuxt-link>
        <button
          v-show="auth.loggedIn"
          :class="navActionClassList"
          class="mx-auto mx-0 hover:bg-gray-800 hover:text-white font-bold rounded-full mt-0 py-4 px-8"
          @click="logout"
        >
          Logout
        </button>
      </div>
    </div>
    <!-- <hr class="border-b border-gray-100 opacity-25 my-0 py-0" /> -->
  </nav>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'TheHeader',
  components: {
    logo: Logo,
  },
  data() {
    return {
      scrollY: 0,
      isOpen: false,
      auth: this.$auth,
    }
  },
  computed: {
    isSticky() {
      return this.scrollY > 10
    },
    headerClassList() {
      return this.isSticky ? 'bg-white shadow' : ''
    },
    navActionClassList() {
      return this.isSticky ? 'gradient text-white' : 'bg-white text-gray-800'
    },
    navContentClassList() {
      let classList = this.isSticky ? 'bg-white' : 'bg-gray-100'
      if (!this.isOpen) {
        classList += ` hidden`
      }
      return classList
    },
  },
  methods: {
    onClick() {
      this.isOpen = false
    },
    onScroll() {
      this.scrollY = window.scrollY
    },
    onToggleClick() {
      this.isOpen = !this.isOpen
    },
    async logout() {
      await this.$auth.logout()
      this.$router.push('/')
    },
  },
  mounted() {
    this.scrollY = window.scrollY
    document.addEventListener('click', this.onClick)
    document.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.onClick, true)
    document.removeEventListener('scroll', this.onScroll, true)
  },
}
</script>
