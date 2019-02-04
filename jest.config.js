module.exports = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transformIgnorePatterns: ["node_modules/?!(bpmn-moddle)"]
};