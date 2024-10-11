<template>
    <header class="bg-main text-white flex justify-between px-20 py-4">
        <router-link to="/" class="text-3xl font-bold">Baraholka</router-link>

        <div class="flex gap-8 items-center" v-if="userName">
            <h3 class="text-xl">{{ userName }}</h3>
            <button @click="$emit('exit')" class="bg-white w-8 h-8 flex justify-center items-center rounded-full">
                <img src="@/assets/icons/exit.svg" width="20" alt="exitBtn">
            </button>
            <button class="bg-white color-main px-4 rounded-xl font-bold">
                <router-link :to="`/createGoods/${userName}`" >add goods</router-link>
            </button>
        </div>

        <div class="text-xl" v-else>
            <button>register | login</button>
        </div>

    </header>
</template>

<script setup>

    const props = defineProps({
        userName: String
    })

    const emits = defineEmits(["exit"])

</script>