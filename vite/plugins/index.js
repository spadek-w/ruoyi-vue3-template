import vue from '@vitejs/plugin-vue'

// import createAutoImport from './auto-import'
import createSvgIcon from './svg-icon'
import createCompression from './compression'
import createSetupExtend from './setup-extend'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { createViteEslint } from './viteEslint'
import { createViteStylelint } from './viteStylelint'

export default function createVitePlugins(viteEnv, isBuild = false) {
  const vitePlugins = [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: false,
      resolvers: [ElementPlusResolver()],
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    }),
    // .vue 中不在需要import 组件  可以直接使用
    Components({
      // dirs 指定组件所在位置，默认为 src/components
      // 可以让我们使用自己定义组件的时候免去 import 的麻烦
      dirs: ['src/components/'], // ++
      // 配置需要将哪些后缀类型的文件进行自动按需引入
      extensions: ['vue'], // ++
      // 解析的 UI 组件库，这里以 Element Plus 为例
      resolvers: [ElementPlusResolver()],
      dts: false
    })
  ]
  // vitePlugins.push(createAutoImport())

  vitePlugins.push(createSetupExtend())
  vitePlugins.push(createSvgIcon(isBuild))
  if (isBuild) {
    vitePlugins.push(...createCompression(viteEnv))
  } else {
    // //配置stylelint
    vitePlugins.push(createViteStylelint())
    // //配置eslint
    vitePlugins.push(createViteEslint())
  }
  return vitePlugins
}
