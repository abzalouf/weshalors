import React from 'react'
import style from './style.less'

// ## //

export default class Offline extends React.Component {
  constructor(props) {
    super(props)

    this.twitter = 'https://twitter.com/armateam'
    this.twitch = 'https://www.twitch.tv/armatvhs'
    this.facebook = 'https://www.facebook.com/armateam.org/'
    this.website = 'http://www.armateam.org/'
  }

  openLink = url => {
    chrome.tabs.create({
      url: url
    })

    window.close()
  }

  render() {
    const logoUrl = chrome.extension.getURL('images/arma-96-gs.png')

    return (
      <div className={style.block}>
        <div className={style.logo}>
          <img alt='ArmaTeam' src={logoUrl} />
        </div>
        <p className={style.offline}>{ chrome.i18n.getMessage('popupOfflineMessage') }</p>
        <div className={style.links}>
          <a className={style.link} onClick={() => this.openLink(this.twitter)}>
            <i className='fa fa-twitter' />
          </a>
          <a className={style.link} onClick={() => this.openLink(this.twitch)}>
            <i className='fa fa-twitch' />
          </a>
          <a className={style.link} onClick={() => this.openLink(this.facebook)}>
            <i className='fa fa-facebook' />
          </a>
          <a className={style.link} onClick={() => this.openLink(this.website)}>
            <i className='fa fa-globe' />
          </a>
        </div>
      </div>
    )
  }
}