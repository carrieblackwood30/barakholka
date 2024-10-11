<template>
    <main class="bg-sec p-8">
        <div class="flex gap-4 items-center w-full justify-center">
        <div class="flex h-12 min-w-[700px]">
            <img src="@/assets/icons/magnifier.svg" alt="">
            <input type="text" placeholder="search goods..." v-model="searchWords" class="border w-full">
        </div>

        <div class="text-xl">
            <label for="city">select your city: </label>
            <select name="city" id="city" v-model="chosenCity">
                <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
            </select>
        </div>

        <button class="bg-main text-white text-xl p-2 rounded-xl" @click="filterGoods()">search</button>
    </div>

    <div>
        <h3 class="text-3xl font-bold color-main">categories: </h3>
        <div class="flex gap-4 w-fit text-white m-4  text-xl">
            <button class="bg-main p-2" v-for="category in categories" :key="category">
                {{ category }}
            </button>
        </div>
    </div>

        <div class="flex gap-8 flex-wrap">
            <div v-for="good in displayGoods" :key="good.id" class="border flex flex-col justify-between p-2">
                <router-link :to="`/item/${good.header}`">
                    <img :src="getImg(good.ImgId)" alt="Img" width="300">
                    <div>
                        <h3 class="text-2xl font-bold">{{ good.header }}</h3>
                        <h4 class="text-xl font-semibold">{{ good.price }}тг</h4>
                        <p>{{ good.city }}</p>
                        <h4>{{ good.author }}</h4>
                    </div>
                </router-link>
            </div>
        </div>
    </main>
    
</template>

<script setup>
    import { cities } from '@/composables/categories';
    import { categories } from "@/composables/categories";
    import { goods } from '@/lib/stores/goods';
    import { onMounted, ref } from 'vue';
    import { getImg } from "@/lib/stores/file";

    const chosenCity = ref("")
    const allGoods = goods
    const displayGoods = ref("")
    const searchWords = ref("")

    function filterGoods() {
        displayGoods.value = allGoods.current
        
        if(chosenCity.value === "all cities"){
            displayGoods.value = allGoods.current
            searchWords.value = ''
        }else{
            displayGoods.value = displayGoods.value.filter(item =>{
                return chosenCity.value === item.city && item.header.includes(searchWords.value)
            })
        }

        
    }

    onMounted(async() =>{
        await allGoods.init()
        displayGoods.value  = allGoods.current
    })
</script>