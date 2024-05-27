import React, { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const Home = () => {
    const [showMap, setShowMap] = useState(false); 
    const [message, setMessage] = useState('');
    const [findBtn, setFindBtn] = useState('');

    const handleClick = () => {
        setShowMap(!showMap);
        alert('지도 상태가 바뀌었습니다! 다시 한 번 살펴보세요.');
        setMessage(message === "~ 성신여대를 찾았습니다 ~"? "~ 성신여자대학교를 찾으려면 버튼을 누르세요 ~": "~ 성신여대를 찾았습니다 ~" );
        setFindBtn(findBtn === "Click to hide"? "Click to find!": "Click to hide" );
    };

    return (
        <div className='container'>
            <h1>성신여자대학교를 찾아보세요</h1>
            <p> {message} </p>
            <div className='schoolmap' id='map'>
                <div className='mapstyle'>
                        <Map
                            // Kakao 지도 API Key
                            kakaoApiKey={process.env.REACT_APP_KAKAO_API_KEY}
                            // 지도의 중심 좌표
                            center={{
                                lat: 37.590342,
                                lng: 127.021339
                            }}
                            // 지도의 스타일 설정
                            style={{
                                width: '100%',
                                height: '650px'
                            }}
                            // 지도의 확대 레벨
                            level={3}
                        >{showMap && (
                            <MapMarker position={{ lat: 37.59159, lng: 127.0221 }}>
                                <div style={{color:"#000"}}>여기가 성신이에요!</div>
                            </MapMarker>)}
                        </Map>
                </div>
            </div>
            <div className='btn_box' onClick={handleClick}>
                💗{findBtn}💗
            </div>
        </div>
    );
}

export default Home;
