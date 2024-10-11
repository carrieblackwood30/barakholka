<template>
    <form @submit.prevent="addGoods()" class="m-8 flex flex-col gap-4 max-w-[650px]">
        <h3 class="text-4xl font-bold">Create a good</h3>

        <label for="name" class="text-2xl bg-main text-white w-fit px-2">header of good</label>
        <input type="text" v-model="header" id="name" class="px-2 border h-8" placeholder="header description...">

        <label for="category" class="text-2xl bg-main text-white w-fit px-2">category</label>
        <div class="flex gap-4 text-xl">
            <button 
                v-for="category in categories" 
                :key="category" 
                type="button"
                @click="categoryValue = category"
                >
                {{ category }}
            </button>
        </div>

        <label for="main" class="text-2xl bg-main text-white w-fit px-2">main description</label>
        <input type="text" v-model="mainDescription" id="main" class="px-2 border h-8" placeholder="main description...">

        <label for="price" class="text-2xl bg-main text-white w-fit px-2">price </label>
        <input type="number" v-model="price" id="price" class="px-2 border h-8" placeholder="price...">

        <label for="city" class="bg-main w-fit text-white text-2xl px-2">choose city: </label>
        <select name="city" id="city" v-model="cityValue">
            <option disabled selected value> --- </option>
            <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
        </select>

        <input type="file" @change="getImg">

        <h3 class="text-xl">author: {{ author }}</h3>
        <button class="bg-main text-white w-fit m-auto px-2 text-xl"> submit </button>
    </form>

</template>

<script setup>
import { categories } from '@/composables/categories';
import { cities } from '@/composables/categories';
import { goods } from '@/lib/stores/goods';
import { user } from '@/lib/stores/user';
import { addFile } from '@/lib/stores/file';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { createdId } from '@/lib/stores/file';

const header = ref("")
const categoryValue =  ref("")
const mainDescription = ref("")
const price = ref("")
const cityValue = ref("")
const author = ref(useRoute().params.userName)
const chosenImg = ref("")

const getImg = (e) =>{
    chosenImg.value = e.target.files[0]
    console.log(chosenImg.value)
}

function addGoods() {
    if(
        header.value !== '' 
        && categoryValue.value !== '' 
        && mainDescription.value !== '' 
        && price.value !== '' 
        && cityValue.value !== ''
    ){
        goods.add({
            userId: user.current.$id,
            description: mainDescription.value,
            price: price.value,
            author: author.value,
            header: header.value,
            category: categoryValue.value,
            city: cityValue.value,
            ImgId: createdId
        })
    }

    addFile(chosenImg.value)

    header.value = ''
    categoryValue.value = ''
    mainDescription.value = ''
    price.value = ''
    cityValue.value = ''
    author.value = ''
}

</script>