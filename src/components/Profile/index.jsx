import React from 'react'

import PropTypes from 'prop-types'
import Avatar from 'components/Avatar'

import * as S from './styled'

const Profile = ({ size, showAvatar, showDescription, title, position, description, ...props }) => {
  return (
    <S.ProfileWrapper size={size} {...props}>
      <S.ProfileLink href="/">
        {showAvatar && <Avatar />}
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      {showDescription && <S.ProfileDescription>{description}</S.ProfileDescription>}
    </S.ProfileWrapper>
  )
}

Profile.propTypes = {
  size: PropTypes.oneOf(['small', 'auto']),
  showAvatar: PropTypes.bool,
  showDescription: PropTypes.bool,
  title: PropTypes.string,
  position: PropTypes.string,
  description: PropTypes.string
}

Profile.defaultProps = {
  size: 'auto',
  showAvatar: false,
  showDescription: true,
  title: '',
  position: '',
  description: ''
}

export default Profile
