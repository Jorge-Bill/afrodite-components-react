import React from 'react'

import { Refresh } from '@styled-icons/boxicons-regular/Refresh'

import * as S from './styled'

const SwUpdater = () => (
  <S.NotificationWrapper>
    <p>Update - reload the page or click here</p>
    <S.IconWrapper>
      <Refresh onClick={() => window.location.reload()} />
    </S.IconWrapper>
  </S.NotificationWrapper>
)

export default SwUpdater
