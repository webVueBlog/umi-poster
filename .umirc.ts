export default {
  npmClient: 'yarn',
  title: '海报生成器',
  base: process.env.NODE_ENV === "production" ? "/umi-poster/" : "/",
  publicPath: process.env.NODE_ENV === "production" ? "/umi-poster/" : "/",
  extraBabelPlugins: [["import", { libraryName: "antd", style: true }]],
};
