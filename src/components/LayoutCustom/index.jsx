import React from 'react'

import PropTypes from 'prop-types'
import NavigationBar from 'components/NavigationBar'
import MenuBar from 'components/MenuBar'
import { TransitionPortal } from 'gatsby-plugin-transition-link'

import GlobalStyles from 'styles/global'
import * as S from './styled'

const LayoutCustom = ({ children }) => (
  <S.LayoutWrapper>
    <GlobalStyles />
    <TransitionPortal level="top">
      <NavigationBar />
    </TransitionPortal>
    <S.LayoutMain>{children}</S.LayoutMain>
    <TransitionPortal level="top">
      <MenuBar />
    </TransitionPortal>
  </S.LayoutWrapper>
)

LayoutCustom.propTypes = {
  children: PropTypes.node.isRequired
}

export default LayoutCustom
