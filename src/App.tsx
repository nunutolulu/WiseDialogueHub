import React from 'react';

import './index.scss'
// import SideBarChat from './sideBarChat/index'
const ns='wise-dialogue-hub-app'
const Apps = (): React.ReactElement => {
  return (
    <div className={ns}>
      <aside className={`${ns}-aside`}>
        <h1>这是左侧的内容</h1>
      </aside>
      <div className={`${ns}-main-content`}>
        <h1>这是右侧的内容</h1>
      </div>
    </div>
  )
}

export default Apps;
