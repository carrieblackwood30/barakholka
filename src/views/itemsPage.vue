<template>
    <div>
        <div v-for="good in itemsPageGood" :key="good.id">
            <div v-if="good.header === $route.params.item">
                {{ good.description }}
            </div>
        </div>
    </div>
</template>

<script setup>
    import { goods } from '@/lib/stores/goods';
    import { onBeforeMount, ref } from 'vue';

    const itemsPageGood = ref()

    onBeforeMount(async() =>{
        await goods.init()
        itemsPageGood.value = goods.current
    })
</script>