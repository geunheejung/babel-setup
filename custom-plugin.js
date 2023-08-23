module.exports = function customPlugin() {
  return {
    // 플러그인 형식은 visitor 객체를 가진 함수를 반환해야 함.
    visitor: {
      // 바벨이 파싱하여 만든 추상 구문 트리(AST)에 접근할 수 있는 메소드를 제공한다.
      Identifier(path) {
        // ? 추상 구문 트리에서 각 노드를 방문할 때마다 호출되나?
        const name = path.node.name;

        // 바벨이 만든 AST 노드를 출력한다.
        console.log(`Identifier() name: ${name}`);

        // 변환작업: 코드 문자열을 역순으로 변환한다.
        path.node.name = name.split("").reverse().join();
      },
    },
  };
};
