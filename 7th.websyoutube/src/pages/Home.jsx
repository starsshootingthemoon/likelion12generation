import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Vloger from '../components/contents/Vloger'
import VideoSlider from '../components/videos/VideoSlider';



import { webdText } from '../data/playlist'
import { websiteText } from '../data/japan'
import { developerText } from '../data/vloger'
import { todayText } from '../data/today'

const Home = () => {
    return (
        <Main 
            title = "Kitkat Youtube"
            description="관심사 모으기 대작전💗🍀">
            
            
            <Today videos={todayText} id="today"/>
            <Vloger videos={developerText} title="😪 추천 개발자를 소개합니다." id="developer" />
            <VideoSlider videos={webdText} title="😮 웹디자인기능사 준비는 이걸로!" id="Vloger" />
            <VideoSlider videos={websiteText} title="😮 웹표준 사이트 만들기 기초 다지기" id="Japan" />
        </Main>
    )
}

export default Home