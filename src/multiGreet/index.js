import {useState} from 'react'
import {StyButton} from './styledComponent'
import RenderGreet from '../RenderGreet'
import './index.css'

const languageList = {
  english: 'English',
  tamil: 'Tamil',
  telugu: 'Telugu',
}

function MultiLangGreet(props) {
  const [activeLang, setActiveLang] = useState(languageList.english)
  const {details} = props

  return (
    <div className="bgDiv">
      <h1>Multilingual Greeting</h1>
      <div className="BtnDiv">
        <StyButton
          onClick={() => setActiveLang(languageList.english)}
          active={activeLang === languageList.english}
        >
          {languageList.english}
        </StyButton>
        <StyButton
          onClick={() => setActiveLang(languageList.tamil)}
          active={activeLang === languageList.tamil}
        >
          {languageList.tamil}
        </StyButton>
        <StyButton
          onClick={() => setActiveLang(languageList.telugu)}
          active={activeLang === languageList.telugu}
        >
          {languageList.telugu}
        </StyButton>
      </div>
      <ul>
        {details.map(eachItem => (
          <RenderGreet
            active={activeLang}
            key={eachItem.id}
            details={eachItem}
          />
        ))}
      </ul>
    </div>
  )
}

export default MultiLangGreet
