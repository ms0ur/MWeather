export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      weatherin: 'Weather in',
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