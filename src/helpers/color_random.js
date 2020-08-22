const repeatStyle = color => `0 0 1px ${color}, `.repeat(4).slice(0, -2)

const colors = [
  { textShadow: repeatStyle( 'blue') },
  { textShadow: repeatStyle('green') },
  { textShadow: repeatStyle('yellow') },
  { textShadow: repeatStyle('red') }
]

const giveMeOneColor = () => colors[Math.floor(Math.random() * 4)]

export default giveMeOneColor