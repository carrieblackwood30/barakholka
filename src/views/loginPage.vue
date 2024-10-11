<template>
  <div class="flex justify-center mt-48 text-center">
    <section class="bg-main text-white p-4">
      <h1 class="text-2xl m-4">authorization</h1>
      <form>

        <div class="flex flex-col gap-4 text-black">
          <input type="email" placeholder="Email" v-model="email" />
          <input type="password" placeholder="Password" v-model="password" />
        </div>

        <div class="flex justify-center gap-8 m-4 text-2xl font-semibold">
          <button 
            v-if="buttonToggle" 
            type="button" 
            @click="user.login(email, password)"
            class="bg-white color-main  rounded-xl px-2"
            >
            Login
          </button>
          <button 
            v-else 
            type="button" 
            @click="user.register(email, password)"
            class="bg-white color-main  rounded-xl px-2"
            >
            Register
          </button>
        </div>

      </form>

      <button @click="buttonToggle = false" v-if="buttonToggle">not registered ?</button>
      <button @click="buttonToggle = true" v-if="!buttonToggle">have a account ?</button>
    </section>
  </div>
</template>


<script setup>
    import { user } from "@/lib/stores/user.js";
    import { ref } from "vue";

    const email = ref("")
    const password = ref("")
    const buttonToggle = ref(true)
</script>