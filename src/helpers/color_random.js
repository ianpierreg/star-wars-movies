const repeatStyle = color => `0 0 1px ${color}, `.repeat(4).slice(0, -2)

const colors = [
  { textShadow: repeatStyle( '#54C4EB') },
  { textShadow: repeatStyle('#5BE5AD') },
  { textShadow: repeatStyle('#F5ED15') },
  { textShadow: repeatStyle('#E5291E') }
]

// this will selected randomly a color from the array of colors
const giveMeOneColor = () => colors[Math.floor(Math.random() * colors.length)]

export default giveMeOneColor
