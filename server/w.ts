const path = __dirname;
console.log('path', path);

export function getW() {
  return () => path;
}