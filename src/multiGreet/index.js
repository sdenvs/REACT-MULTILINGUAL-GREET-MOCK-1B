import {useState} from 'react'
import StyButton from './styledComponent'
import './index.css'

const languageList = {
  english: 'English',
  tamil: 'Tamil',
  telugu: 'Telugu',
}

function MultiLangGreet(props) {
  const [activeLang, setActiveLang] = useState(languageList.english)
  const {details} = props

  const renderGreet = () => {
    const renderItem = details.find(
      eachItem => eachItem.buttonText === activeLang,
    )
    console.log(renderItem)

    return (
      <div className="w-100 text-center">
        <img
          className="greetImage"
          src={renderItem.imageUrl}
          alt={renderItem.imageAltText}
        />
      </div>
    )
  }

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
      {renderGreet()}
    </div>
  )
}

export default MultiLangGreet
