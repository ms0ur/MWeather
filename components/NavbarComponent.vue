<script setup lang="ts">
const { locale } = useI18n()
const colorMode = useColorMode()
console.log(colorMode.preference)
import { useCookie } from 'nuxt/app';
import axios from 'axios'
import { cityIn, cityFrom, cityTo } from 'lvovich';

const lang = useCookie('lang', {default() {
    return 'ru'
},})
locale.value = lang.value
const theme = useCookie('theme', {default() {
    return 'system'
}})
const lat = useCookie('lat')
const lon = useCookie('lon')
const cityRU = useCookie('cityRU')
const cityEN = useCookie('cityEN')
const countryRU = useCookie('countryRU')
const countryEN = useCookie('countryEN')
const countryCode = useCookie('countryCode')
const locationNameRU = useCookie('locationNameRu')
const locationNameEN = useCookie('locationNameEn') 

let searchValue = ''

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords
            console.log('completed: ', latitude, longitude)
            lat.value = String(latitude)
            lon.value = String(longitude)

            
        })
        axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=ru`).then((res) => {
            cityRU.value = cityIn(res.data.city); 
            countryRU.value = res.data.countryName
            countryCode.value = res.data.countryCode
            locationNameRU.value = res.data.locality
            console.log('completed ru ')
        })
        axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`).then((res) => {
            cityEN.value = res.data.city
            countryEN.value = res.data.countryName
            locationNameEN.value = res.data.locality
            console.log('completed en')
        })
    } else {
        alert(`{{ $t('location.notSupported') }}`)
    }
    
}

function syncLang(){
    lang.value = locale.value
}

function syncTheme(){
    theme.value = colorMode.preference
}

onNuxtReady(() => {
 if(!lat.value || !lon.value){
    getLocation()
 }
})



</script>
<template>
    <nav class="w-full h-24 flex justify-between">
        <div class="flex flex-row h-full items-center md:ml-10">
            <LucideCloudSunRain />
            <h1 class="text-5xl">MWeather</h1><span class="ml-2 mt-2 inline-block py-1 px-2 rounded-full border-yellow-700 border-2 bg-yellow-500 text-white">BETA</span>
        </div>
        <div class="flex flex-row h-full items-center">
            <div class="flex flex-row p-3 rounded-lg search">
                <input v-model="searchValue" :placeholder="$t('search.whatweather')" class="mr-2" type="text" />
                <LucideSearch />
            </div>
        </div>
        <div class="flex flex-row h-full items-center md:mr-10">
            <p class="mr-2">Lang/Язык:</p>
            <select v-model="locale" @change="syncLang">
                <option value="en">English</option>
                <option value="ru">Русский</option>
            </select>
            <p class="ml-10 mr-2">{{ $t('theme.theme') }}:</p>
            <select v-model="colorMode.preference" @change="syncTheme">
                <option value="system">{{ $t('theme.auto') }}</option>
                <option value="light">{{ $t('theme.light') }}</option>
                <option value="dark">{{ $t('theme.dark') }}</option>
            </select>
        </div>
    </nav>
</template>
<style>
.search{
    background-color: rgb(218, 218, 218);
    border: 2px solid rgb(179, 179, 179);
}
.dark-mode .search{
    background-color: rgb(34, 34, 34);
    border: 2px solid rgb(68, 68, 68);
}
nav{
    background-color: white;
}
.dark-mode nav{
    background-color: black;
    color: white;
}
input{
    color:black;
    background-color: rgb(218, 218, 218);
    border: 0;
}
input:focus {
  outline: none;
}
.dark-mode input{
    color:white;
    background-color: rgb(34, 34, 34);
    border: 0;
}
select {
    color:black;
}
.dark-mode select{
    color:white;
    background-color: rgb(34, 34, 34);
}
</style>