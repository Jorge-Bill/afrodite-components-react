import React from 'react'

import PropTypes from 'prop-types'
import ReactDisqusComments from 'react-disqus-comments'

import * as S from './styled'

const Comments = ({ url, title }) => {
  const completeURL = `https://jorgemendes.com.br${url}`

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comments</S.CommentsTitle>
      <ReactDisqusComments shortname="jorgemendes-com-br" identifier={completeURL} title={title} url={completeURL} />
    </S.CommentsWrapper>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Comments
