import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif']
      }
    }
  }
}
