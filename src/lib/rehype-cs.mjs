// Nezlomitelná mezera za jednopísmennými předložkami a spojkami (k, s, v, z, o, u, a, i)
// a před „Kč“. Běží při sestavení, takže funguje i pro text z CMS.
const NBSP = ' ';
const SINGLE = /(^|[\s(„"])([KkSsVvZzOoUuAaIi])\s+(?=\S)/g;
const PRICE = /(\d)\s+(Kč|km|m|%)(?=[\s,.;)]|$)/g;

function walk(node, fn) {
  if (node.type === 'text') node.value = fn(node.value);
  else if (node.children && node.tagName !== 'code' && node.tagName !== 'pre') node.children.forEach((c) => walk(c, fn));
}

export function czechSpaces(text) {
  return String(text).replace(SINGLE, `$1$2${NBSP}`).replace(PRICE, `$1${NBSP}$2`);
}

export function rehypeCzechSpaces() {
  return (tree) => walk(tree, czechSpaces);
}
