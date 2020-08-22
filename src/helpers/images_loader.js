const importAll = r => r.keys().map(r)

const images = importAll(require.context('../../public/images/cards', false, /\.(png|jpe?g|svg)$/))
const shuffleArray = arr => arr
  .map(a => [Math.random(), a])
  .sort((a, b) => a[0] - b[0])
  .map(a => a[1]);

export default shuffleArray(images)