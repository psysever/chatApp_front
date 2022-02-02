import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../../assets/css/Photopolios.css'
import Board from './Board'
import Chat from './Chat'

function PhotoPolios(props: any) {
  const tabState = props.match.params?.id

  return (
    <div className="community list">
      <h2 className="en">Community</h2>
      <div className="community_info">
        <ul className="community_tab">
          <li
            onClick={() => props.history.replace('/photopolios/1')}
            className={tabState === '1' ? 'nowpage' : ''}
          >
            Board
          </li>
          <li
            onClick={() => props.history.replace('/photopolios/2')}
            className={tabState === '2' ? 'nowpage' : ''}
          >
            Chat
          </li>
        </ul>
        {tabState === '1' && <Board />}
        {tabState === '2' && <Chat />}
      </div>
    </div>
  )
}

export default PhotoPolios
