import { addPlugin, defineNuxtModule, createResolver } from 'nuxt/kit'
import { join } from 'path'

export default defineNuxtModule({
  setup(_, nuxt) {
    nuxt.hook('components:dirs', (dirs) => {
      dirs.push({
        path: join(__dirname, '../src/components'),
        prefix: 'lc',
      })
    })

    // const { resolve } = createResolver(import.meta.url)

    // // add the helper plugin
    // addPlugin(resolve('lib/plugins/helper.ts'))
    // // add animate.css file from animate.css library
    // nuxt.options.css.push('tailwind.css')
    nuxt.options.modules.push('@nuxtjs/tailwindcss')
  },
})
