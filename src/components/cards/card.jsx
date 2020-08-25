import React, { useState, useEffect } from 'react'
import '../../assets/stylesheets/cards.scss'
import { useStore } from 'react-context-hook'
import initialStore from '../../helpers/initial_store'

const Card = ({ dat }) => {
  const data = { ...dat }
  const [clicked, setClicked] = useState(false)
  const [className, setClassName] = useState('card hide')
  const [selected, setSelected] = useStore('selected')
  const [started] = useStore('started')
  const [rightOnes] = useStore('rightOnes')
  const [selectedCardSound] = useState(new Audio('/sounds/cardSelection.mp3'))

  useEffect(() => {
    if(clicked) selectedCardSound.play()
    setClassName(classes())
  }, [clicked])

  useEffect(() => {
    selectedCardSound.volume = 0.001
  }, [])

  useEffect(() => {
    if (!started) setClicked(false)

    setClassName(classes())
    // setTimeout(() => setClassName(classes()), (data.id+1)*100)
  }, [started])

  const setMeAsSelected = () => {
    const { id, episode_id: episodeId } = data
    if(rightOnes.includes(episodeId)) return
    const { firstSelected, secondSelected } = selected
    let itemsStoreTemplate  =  { ...initialStore.selected }
    const noCardsSelected = firstSelected.id === -1 && secondSelected.id === -1
    const firstCardSelected = firstSelected.id !== -1 && secondSelected.id === -1
    const bothCardsSelected = firstSelected.id !== -1 && secondSelected.id !== -1

    if (noCardsSelected || bothCardsSelected) {
      itemsStoreTemplate = { ...itemsStoreTemplate, firstSelected: { id, episodeId }}
    } else if (firstCardSelected) {
      if (firstSelected.id === id) return
      itemsStoreTemplate = { firstSelected, secondSelected: { id, episodeId }}
    }

    setSelected(itemsStoreTemplate)
  }

  useEffect(() => {
    const { firstSelected, secondSelected } = selected
    const { id, episode_id: episodeId } = data
    const shouldSetClicked = firstSelected.id === id || secondSelected.id === id || rightOnes.includes(episodeId)
    setClicked(shouldSetClicked)
  }, [selected])


  const classes = () => {
    const newClasses = ['card']
    newClasses.push(started ? 'show' : 'hide')
    if(clicked) newClasses.push('clicked')
    return newClasses.join(' ')
  }

  return (
    <div className={className} onClick={started ? setMeAsSelected : () => {}}>
      <div className='content'>
        <div className='front metal'>
          <div className='module'>
            <div className="name-wrapper">
              <div id='stars'/>
              <div id='stars2'/>
              <div id='stars3'/>
              <div className="star" style={data.color}>STAR</div>
              <div className="wars" style={data.color}>WARS</div>
            </div>
          </div>
        </div>
        <div className='back metal'>
          <div className='moduletwo'>
            <img alt={data.title} src={data.image} />
            <div className="movie-title">
              <div className="movie-name">{data.title}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {}

export default Card