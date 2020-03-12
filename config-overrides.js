const { override, fixBabelImports, addLessLoader } = require('customize-cra');


module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),

    addLessLoader({
        javascriptEnabled: true,
        // 自定义主题颜色
        modifyVars: { '@primary-color': '#1890FF' },
    }),
)

