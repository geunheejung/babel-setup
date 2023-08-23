module.exports = function () {
  return {
    visitor: {
      VariableDeclaration(path) {
        console.log(`VariableDeclaration() kind:`, path.node.kind);

        if (path.node.kine === "const") {
          path.node.kind = "var";
        }
      },
    },
  };
};
