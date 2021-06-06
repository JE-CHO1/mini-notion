module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'source-map',
  resolve: { /* 웹팩이 알아서 경로나 확장자를 처리 */
    modules: ['node_modules'], /* 디렉토리의 node_modules를 인식 */
    extensions: ['.json', '.css', '.ts', '.tsx', '.js', '.scss'], /* 확장자들은 웹팩에서 알아서 처리해주기 때문에 파일에 저 확장자들을 입력할 필요가 없어짐 */
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.css$/,
        /* .css확장자에 css-loader와 style-loader를 순서대로 사용, 오른쪽항목부터 먼저 실행됨
          * css-loader가 먼저 css데이터 생성
          * style-loader가 HTML header에 style태그 삽입
        */
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
