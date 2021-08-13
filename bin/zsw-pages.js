#!/usr/bin/env node

// mac 需要修改文件夹权限
// 进入文件夹的上一级目录：sudo chmod -R 755 文件夹名

process.argv.push('--cwd') // 指定工作目录
process.argv.push(process.cwd())
process.argv.push('--gulpfile') // 指定执行目录
// process.argv.push(require.resolve('../lin/index'))
process.argv.push(require.resolve('..')) // 从 package.json 中查找结果一样

console.log(process.argv)

require('gulp/bin/gulp')