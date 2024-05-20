import React, { useState } from 'react'
import Comment from '../assets/img/coment.svg'
import Emptyheart from '../assets/img/empty-heart.svg'
import heart from '../assets/img/heart.svg'

const Article = ({title, content}) => {

    const [click, setClick] = useState(false);
  return (
    <div className='article_wrap'>
        <div className="article">
            <h2>{title}</h2>
            <p>{content}</p>

            <div>
                <div>
                    <img src={Comment} alt=''/>
                    <p>0</p>
                </div>
                {click ? (
                    <div>
                        <img src={heart} alt='' onClick={() => {setClick(!click)}}/>
                        <p>1</p>
                    </div>

                ) : (
                    <div>
                        <img src={Emptyheart} alt=''onClick={() => {setClick(!click)}}/>
                        <p>0</p>
                    </div>

                )}

            </div>


        </div>
            <div className="comment">
                <input type='text' placeholder='댓글을 입력해 주세요!'/>
                <button>등록</button>
            </div>
        </div>
  )
}

export default Article