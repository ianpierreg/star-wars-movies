const repeatStyle = color => `0 0 1px ${color}, `.repeat(4).slice(0, -2)

const colors = [
  { textShadow: repeatStyle( '#54C4EB') },
  { textShadow: repeatStyle('#5BE5AD') },
  { textShadow: repeatStyle('#F5ED15') },
  { textShadow: repeatStyle('#E5291E') }
]

const giveMeOneColor = () => colors[Math.floor(Math.random() * 4)]

export default giveMeOneColor