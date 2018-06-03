const aliasify = (object) => {
  let map = {};

  for (item in object) {
    map[item] = item;
    for (alias in object[item].aliases) {
      map[object[item].aliases[alias]] = item;
    }
  }

  return (item) => {
    return object[map[item]];
  }
};

exports.default = aliasify;
export default aliasify;
