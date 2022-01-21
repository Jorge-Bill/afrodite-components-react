import React from 'react'

import PropTypes from 'prop-types'
import NavigationBar from 'components/NavigationBar'
import MenuBar from 'components/MenuBar'

import GlobalStyles from 'styles/global'
import * as S from './styled'

const LayoutCustom = ({ children }) => (
  <S.LayoutWrapper>
    <GlobalStyles />
    <NavigationBar />
    <S.LayoutMain>{children}</S.LayoutMain>
    <MenuBar />
  </S.LayoutWrapper>
)

LayoutCustom.propTypes = {
  children: PropTypes.node.isRequired
}

export default LayoutCustom
