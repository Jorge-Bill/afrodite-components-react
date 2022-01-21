import React from 'react'

import PropTypes from 'prop-types'
import NavigationBar from 'components/NavigationBar'
import HeaderBanner from 'components/HeaderBanner'
import MenuBar from 'components/MenuBar'

import GlobalStyles from 'styles/global'
import * as S from './styled'

const LayoutHero = ({ title, bannerTags, noBanner, children, ...props }) => (
  <S.LayoutHeroWrapper {...props}>
    <GlobalStyles />
      <NavigationBar
        variant="navbar"
        profileSize="small"
        profileAvatar={false}
        profileDescription={false}
        menuLinksDisplay="inline"
        firstMenu
        socialSize="small"
      />
    {!noBanner && <HeaderBanner title={title} tags={bannerTags} />}
    <S.LayoutHeroMain>{children}</S.LayoutHeroMain>
      <MenuBar variant="bottom" size="small" />
  </S.LayoutHeroWrapper>
)

LayoutHero.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  bannerTags: PropTypes.string,
  noBanner: PropTypes.bool
}

LayoutHero.defaultProps = {
  title: 'Jorge Mendes',
  bannerTags: '',
  noBanner: false
}

export default LayoutHero
