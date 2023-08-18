# babel

---

```jsx
1. npm install --save-dev @babel/core @babel/cli
2. app.js -> const hello = () => console.log('hello');
3. npx babel app.js --out-file output.js
4. output.js -> const hello = () => console.log('hello');
```

- output.js 파일을 열어본다면 변한게 없다. 사실 babel은 그 자체로는 아무것도 하지 않는다.
- `preset`과 `plugin`을 추가하지 않는다면 babel은 아무것도 하지 않는다.

> babel은 그 자체로는 아무것도 하지 않는다.

## 진짜 동작하는 것은 babel plugin이다.

---

- babel이 무언가 하게 하려면, `plugin` 을 설치해야 한다.
- babel한테 dependency를 사용한다고 말해야 한다.
- .`babelrc` 를 root에 추가(babel 설정 파일)
- `@babel/plugin-transform-arrow-functions` : arrow functions를 es5로 컴파일하라고 지정.

```jsx
1. npm install --save-dev @babel/plugin-transform-arrow-functions
2. .babelrc 생성
3. .babelrc
{
  "plugins": ["@babel/plugin-transform-arrow-functions"]
}
4. npx babel app.js --out-file output.js
5. output.js
const hello = function () {
  return console.log("hello world");
};
```

- .babelrc : babel plugin들을 모아놓고 사용할 설정파일

## babel plugins에서는 번들로 babel preset이 함께 온다

---

- npm 설치와 babel 설정을 한번만 하면 plugin들이 자동적으로 설치된다.
  - babel foundation에서는 plugin들을 포함한 번들 파일을 포함 preset을 만듬.

### 공식 preset

```jsx
@babel/preset-env
@babel/preset-flow
@babel/preset-react
@babel/preset-typescript
```

### @babel/preset-env

```jsx
1. npm install --save-dev @babel/preset-env
2. .babelrc
{
  // "plugins": ["@babel/plugin-transform-arrow-functions"]
  "presets": ["@babel/preset-env"]
}
3. npx babel app.js --out-file output.js
4. output.js
"use strict";

var hello = function hello() {
  return console.log("hello world");
};
```

- es6 이후 기능들을 컴파일 해줄 plugin들이 preset-env 라는 preset에 담겨져있음.

## babel-preset-env로 설정하고자 하는 브라우저 선택

---

- 컴파일된 자바스크립트 양이 많아져 번들의 코드를 길어지게 만든다.
  ![post-images_pop8682_5f515320-ce0e-11e9-a35a-df3c9f25faa0_-2019-09-03-2.47.04.png](babel%2017512458b1f649c3ae90fccdd4250fd3/post-images_pop8682_5f515320-ce0e-11e9-a35a-df3c9f25faa0_-2019-09-03-2.47.04.png)
- 중간의 코드는 오래된 브라우저를 호환하기 위해 컴파일된 파일
-

# babel.config.js 파일과 .babelrc 차이점

## 바벨 설정 파일 포맷

---

- 바벨은 두 가지 설정 파일 포맷을 가진다.
- 두 가지 파일 포맷은 단독으로 쓰일 수도 있고, 함께 쓰일 수도 있다.

### 1. 프로젝트 전체 구성

- babel.config.json (다른 확장자 포함)

### 2. 상대 파일 구성

- .babelrc.json (다른 확장자 포함)
- package.json 파일 안에 정의된 `babel key`

바벨은 컴파일 되는 “filename” 부터 폴더 구조를 ********************************\*\*\*\*********************************\*\*\*\*********************************\*\*\*\*********************************따라 올라가며 .babelrc 파일(또는 지원되는 다른 확장자 파일)을 로드한다.********************************\*\*\*\*********************************\*\*\*\*********************************\*\*\*\*********************************

## 어떻게 구분해서 사용해야할까?

---

### .babelrc

- 부분집합 디렉토리 또는 파일에서 특정한 플러그인이나, 변형할 때 유용하다.
- 예를 들어, 프로젝트 내에 서드파티 라이브러리가 바벨에 의해 트랜스폼되기 원하지 않을 수 있다.

### babel.config.json

- 여러 패키지 디렉토리를 가진 프로젝트에서 하나의 바벨 설정을 가져갈 때 유용하다.
- 보다 보편적으로 사용됨.

### .js vs .json

- `.js` 를 사용하면 바벨 구성 api가 노출된다.
  - 이 경우 캐싱과 관련하여 복잡성이 증가하므로, 대부분 케이스에서 `.json` 를 사용하는게 더 낫다고 한다.

# 출처

---

[[번역] babel-preset-env는 무엇이고 왜 필요한가?](https://velog.io/@pop8682/번역-왜-babel-preset이-필요하고-왜-필요한가-yhk03drm7q)

[babel.config.js 파일과 .babelrc 차이점](https://kschoi.github.io/cs/babel-config-js-vs-babelrc/)
