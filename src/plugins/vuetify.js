/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
// import "@fortawesome/fontawesome-free/css/all.css" // Ensure your project is capable of handling css files
import 'vuetify/styles'

// import { aliases, mdi } from 'vuetify/iconsets/mdi'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          yellow: "#fdc601",
          subtitle: '#97979b',
          primary: '#0077ed',
          secondary: '#0455b6',
          accent: '#000000',
          text: '#121212',
          text_background: '#f1f1f1',
          book: '#521800',
          bg_1: '#f1f5ff',
          bg_2: '#cfd6f1'
        }
      },
      dark: {
        dark: true,
        colors: {
          yellow: "#fdc601",
          subtitle: '#97979b',
          primary: '#0077ed',
          secondary: '#0455b6',
          accent: '#ffffff',
          text: '#f1f1f1',
          text_background: '#121212',
          book: '#702100',
          bg_1: '#474747',
          bg_2: '#7f7f93'
        }
      }
    },


    ssr: true,
    icons: {
      defaultSet: 'mdi',
      // aliases,
      sets: {
        // mdi,
        // fa
      },
      iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
      values: {
        structure: 'mdi-molecule',
        docking: 'mdi-vector-union',
        clustering: 'mdi-chart-bubble',
        pharmacophore: 'mdi-grain',
        solutionBuilder: 'mdi-blur',
        mdiStarOutline: 'mdi-star-outline',
        mdiStar: 'mdi-star',
        mdiMinus: 'mdi-minus',
        mdiStarHalfFull: 'mdi-star-half-full'
      }
    },
  },
})
