import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (<div>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div id='title'>
  <span>
    STAR WARS
  </span>
        <br/>
  <span>
    MOVIES
  </span>
      </div>
      <div id='movies-wrapper'>
        <div className='card'>
          <div className='content'>
            <div className='front metal'>
              <div className='module'>
                <img alt=''
                     src='https://1075koolfm.com/wp-content/uploads/2017/11/Star_Wars_Episode_VIII_The_Last_Jedi_Word_Logo-400x200.png'/>
              </div>
            </div>
            <div className='back metal'>
              <div className='moduletwo'>
                Movie name here
                <p>Aqui vai ficar a Sinopse do filme</p>
                <p>Ano do Filme: 2001</p>
              </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='content'>
            <div className='front metal'>
              <div className='module'>
                <img alt=''
                     src='https://1843784937.rsc.cdn77.org/wp-content/uploads/2015/12/Toronto-star-wars-400x200.jpg'/>
              </div>
            </div>
            <div className='back metal'>
              <div className='moduletwo'>
                Movie name here
                <p>Aqui vai ficar a Sinopse do filme</p>
                <p>Ano do Filme: 2001</p>
              </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='content'>
            <div className='front metal'>
              <div className='module'>
                <img alt='' src='https://i.pinimg.com/600x315/8f/41/29/8f41298070074b7d37f38f38ee6d519a.jpg'/>
              </div>
            </div>
            <div className='back metal'>
              <div className='moduletwo'>
                Movie name here
                <p>Aqui vai ficar a Sinopse do filme</p>
                <p>Ano do Filme: 2001</p>
              </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='content'>
            <div className='front metal'>
              <div className='module'>
                <img alt=''
                     src='https://college.lclark.edu/live/image/gid/530/width/1260/height/630/crop/1/71211_star_wars.jpg'/>
              </div>
            </div>
            <div className='back metal'>
              <div className='moduletwo'>
                Movie name here
                <p>Aqui vai ficar a Sinopse do filme</p>
                <p>Ano do Filme: 2001</p>
              </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='content'>
            <div className='front metal'>
              <div className='module'>
                <img alt='' src='https://diamanti.com/wp-content/uploads/2018/04/Solo-A-Star-Wars-Story-1-400x200.jpg'/>
              </div>
            </div>
            <div className='back metal'>
              <div className='moduletwo'>
                Movie name here
                <p>Aqui vai ficar a Sinopse do filme</p>
                <p>Ano do Filme: 2001</p>
              </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='content'>
            <div className='front metal'>
              <div className='module'>
                <img alt='star-wars'
                     src='https://insidethemagic-119e2.kxcdn.com/wp-content/uploads/2020/05/star-wars-rise-of-skywalker-leaks-theories-spoilers-400x200.jpeg'/>
              </div>
            </div>
            <div className='back metal'>
              <div className='moduletwo'>
                Movie name here
                <p>Aqui vai ficar a Sinopse do filme</p>
                <p>Ano do Filme: 2001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>);
}

export default App;
