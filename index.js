console.stringify = function(...args) {
  var stringArgs = args.map(arg => JSON.stringify(arg, null, 2));
  console.log.apply(console, stringArgs);
};
