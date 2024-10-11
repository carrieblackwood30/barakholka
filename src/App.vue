<template>
  <theHeader :user-name="currentUser" @exit="user.logout()" />
  <router-view />
</template>

<script setup>
  import theHeader from "@/components/theHeader.vue";
  import { onMounted, ref } from "vue";
  import { user } from '@/lib/stores/user.js'
  import router from "./router";

  const currentUser = ref()

  onMounted(async() => {
    await user.init();

    
    if(user.current === null){
      router.push("/login")
    }

    currentUser.value = user.current.email
  });

</script>