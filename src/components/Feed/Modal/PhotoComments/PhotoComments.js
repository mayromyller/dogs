import React, { useContext, useState, useRef, useEffect } from 'react'
import * as S from './PhotoComments.module.css'

import { UserContext } from '../../../../contexts/userContext'

import FormComment from '../FormComment/FormComment'

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments)
  const { login } = useContext(UserContext)
  const scrollComment = useRef(null)

  useEffect(() => {
    scrollComment.current.scrollTop = scrollComment.current.scrollHeight
  }, [comments])

  return (
    <>
      <ul ref={scrollComment} className={S.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <FormComment id={props.id} setComments={setComments} />}
    </>
  )
}

export default PhotoComments
