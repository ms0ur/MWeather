<script setup lang="ts">
const route = useRoute()
const { locale } = useI18n()
const currentDate = new Date();
const expiresDate = new Date(currentDate.getTime() + 15 * 60000); // Add 15 minutes (1 minute = 60000 milliseconds)
import config from '@/config.ts'

const apikey = config.weatherapiKey


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
const weatherNameRU = useCookie('weatherNameRu', {
  expires: expiresDate
})
const weatherNameEN = useCookie('weatherNameEn', {
  expires: expiresDate
})
const weatherCode = useCookie('weatherCode', {
  expires: expiresDate
})
const weatherVideo = useCookie('weatherVideo', {
  expires: expiresDate
})
</script>

<template>
  <div>
    <header class="h-fit w-fit">
      <div class="absolute h-full w-full">
        <video class="w-full h-full object-cover absolute top-0 left-0 z-0" autoplay loop muted>
          <source src="/videos/clear.mp4" type="video/mp4" />
          
        </video>
      </div>
      <div class="absolute overlay w-full h-full">
        
      </div>
      <div class="absolute textsc flex p-5 z-10 h-full w-full">
          <div class="flex justify-start items-start">
            <h2 class="text-4xl">{{ $t('weatherin') }} <span class="rounded-full fi fis" :class="'fi-' + (countryCode ? countryCode.toLowerCase() : 'aq')"></span> {{ lang == 'ru' ? cityRU : cityEN }},  {{ lang == 'ru' ? locationNameRU : locationNameEN }}</h2>
          </div>
          <div class="flex justify-center items-center">
            <h2>Sunny</h2>
          </div>
      </div>
    </header>
  </div>
</template>
<style>
  .dark-mode .overlay {
    background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity (0.5 in this example) */
    z-index: 1;
  }
  .overlay{
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 1;
  }
  .dark-mode .textsc {
    color: white;
  }
  .textsc{
    color: black;
  }
</style>