import shuffleArray from './array'

const importAll = r => r.keys().map(r)

const images = importAll(require.context('../../public/images/cards', false, /\.(png|jpe?g|svg)$/))

export default shuffleArray(images)
