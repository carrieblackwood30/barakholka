<template>
    <div class="m-12">
        <router-link to="/" class="bg-main text-white px-2"> {{`< back `}} </router-link>
        <div v-if="itemsPageGood">
            <div v-for="good in itemsPageGood" :key="good.id" class="m-8">
                <div v-if="good.header === $route.params.item" class="max-w-[300px] flex flex-col gap-4">
                    <h1 class="text-3xl">{{ good.header }}</h1>
                    <img :src="getImg(good.ImgId)" class="max-h-[400px] w-full " alt="good.img">
                    <h3 class="tex-xl font-semibold">{{ good.price }} тг</h3>
                    <h4 class="text-2xl">{{ good.description }}</h4>
                    <h5>{{ good.author }}</h5>
                </div>
            </div>
        </div>
        <div v-else class="flex justify-center">
            <loader />
        </div>
    </div>
</template>

<script setup>
    import { goods } from '@/lib/stores/goods';
    import { onBeforeMount, ref } from 'vue';
    import { getImg } from "@/lib/stores/file";
    import loader from '@/components/UI/loader.vue';

    const itemsPageGood = ref()

    onBeforeMount(async() =>{
        await goods.init()
        itemsPageGood.value = goods.current
    })
</script>