// 配置stylelint
import viteStylelint from 'vite-plugin-stylelint'

export function createViteStylelint() {
  return viteStylelint({
    // 对某些文件排除检查
    exclude: ['node_modules']
  })
}
