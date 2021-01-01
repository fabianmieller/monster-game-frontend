<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <router-link :to="{ name: 'dashboard' }"><img class="h-8" src="https://fabianmieller.de/wp-content/uploads/2019/10/logo.png" alt="Logo"></router-link>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <router-link :to="{ name: 'dashboard' }" class="px-3 py-2 font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md text-sm font-medium focus:outline-none focus:text-white focus:bg-gray-700">Dashboard</router-link>
              <router-link :to="{ name: 'game' }" class="px-3 py-2 font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md text-sm font-medium focus:outline-none focus:text-white focus:bg-gray-700">Game</router-link>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <!-- <button class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700" aria-label="Notifications">
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button> -->

            <!-- Profile dropdown -->
            <div class="ml-3 relative">
              <div>
                <button @click="showProfileDropdown = !showProfileDropdown" class="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid" id="user-menu" aria-label="User menu" aria-haspopup="true">
                  <!-- TODO: use avatar_url -->
                  <img class="h-8 w-8 rounded-full" src="https://fabianmieller.de/wp-content/uploads/2019/05/fabian-mieller.jpg" alt="">
                </button>
              </div>

              <transition
                enter-active-class="transition ease-out duration-100 transform"
                enter-from-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75 transform"
                leave-from-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-95"
              >
                <div
                  v-show="showProfileDropdown"
                  class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
                >
                  <div class="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                    <!-- <template v-if="..."> -->
                    <router-link :to="{ name: 'login' }" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" active-class="" role="menuitem">Login</router-link>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Register</a>
                    <!-- </template> -->
                    <!-- TODO: show items when user is logged in -->
                    <!-- <template v-else> -->
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                    <!-- </template> -->
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button @click="showMobileMenu = !showMobileMenu" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
            <!-- Menu open: "hidden", Menu closed: "block" -->
            <svg class="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Menu open: "block", Menu closed: "hidden" -->
            <svg class="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="md:hidden" :class="{ 'block': showMobileMenu, 'hidden': !showMobileMenu }">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link :to="{ name: 'dashboard' }" class="block px-3 py-2 font-medium text-base text-gray-300 hover:text-white hover:bg-gray-700 rounded-md font-medium focus:outline-none focus:text-white focus:bg-gray-700">Dashboard</router-link>
        <router-link :to="{ name: 'game' }" class="block px-3 py-2 font-medium text-base text-gray-300 hover:text-white hover:bg-gray-700 rounded-md font-medium focus:outline-none focus:text-white focus:bg-gray-700">Game</router-link>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <!-- TODO: link to profile -->
        <div class="flex items-center px-5 space-x-3">
          <div class="flex-shrink-0">
            <!-- TODO: use avatar_url -->
            <img class="h-10 w-10 rounded-full" src="https://fabianmieller.de/wp-content/uploads/2019/05/fabian-mieller.jpg" alt="">
          </div>
          <div class="space-y-1">
            <div class="text-base font-medium leading-none text-white">Fabian Mieller</div>
            <div class="text-sm font-medium leading-none text-gray-400">kontakt@fabianmieller.de</div>
          </div>
        </div>
        <div class="mt-3 px-2 space-y-1">
          <!-- <template v-if="..."> -->
          <router-link :to="{ name: 'login' }" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Login</router-link>
          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Register</a>
          <!-- </template> -->
          <!-- TODO: show items when user is logged in -->
          <!-- <template v-else> -->
          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Settings</a>
          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Sign out</a>
          <!-- </template> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavigation',
  data: () => {
    return {
      showMobileMenu: false,
      showProfileDropdown: false,
    }
  },
}
</script>
