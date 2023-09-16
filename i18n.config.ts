export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      weatherin: 'Weather in',
      search:{
        search: 'Search',
        entercity: 'Enter city name',
        whatweather: 'What\'s the weather like in...',
        notSupported: 'Search is not supported in your browser'
      },
      theme: {
        theme: 'Theme',
        light: 'Light',
        dark: 'Dark',
        auto: 'Auto'
      },
      location: {
        location: 'Location',
        city: 'City',
        country: 'Country',
        get: 'Get location',
        notSupported: 'Location is not supported in your browser'
      }

    },
    ru: {
      weatherin: 'Погода в ',
      search:{
        search: 'Поиск',
        entercity: 'Введите название города',
        whatweather: 'Какая погода в...',
        notSupported: 'Поиск не поддерживается вашим браузером'
      },
      theme: {
        theme: 'Тема',
        light: 'Светлая',
        dark: 'Тёмная',
        auto: 'Авто'
      },
      location: {
        location: 'Местоположение',
        city: 'Город',
        country: 'Страна',
        get: 'Получить местоположение',
        notSupported: 'Местоположение не поддерживается вашим браузером'
      }
    }
  }
}))