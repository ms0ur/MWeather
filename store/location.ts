import { defineStore } from 'pinia'

export const useLocationStore = defineStore('location', {
  state: () => ({
    lat: '',
    lon: '',
    city: '',
    country: '',
    locVal: '',
  }),
  actions: {
    setRawLocation(lat: string, lon: string) {
        this.lat = lat
        this.lon = lon
    },
    setCity(city: string) {
      this.city = city
    },
    setCountry(country: string) {
      this.country = country
    },
    setLocVal(locVal: string) {
      this.locVal = locVal
    },
  },
})