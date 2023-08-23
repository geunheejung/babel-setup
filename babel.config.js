module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry", // 폴리필 사용 방식 지정
        corejs: {
          // 폴리필 버전 지정
          version: 2,
        },
      },
    ],
  ],
  targets: {
    chrome: "79", // 크롬은 블록 스코핑, 화살표 함수를 지원하기 때문에 코드를 변환하지 않고 결과물을 만듬.
    ie: "11",
  },
};
