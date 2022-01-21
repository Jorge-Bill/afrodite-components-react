import React from 'react'

import propTypes from 'prop-types'
import getThemeColor from 'utils/getThemeColor'

import * as S from './styled'

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
  <S.PaginationWrapper>
    {!isFirst && (
      <a cover direction="left" title="Previous page" bg={getThemeColor()} duration={0.6} to={prevPage}>
        ← Previous Page
      </a>
    )}
    <p>
      {currentPage} of {numPages}
    </p>
    {!isLast && (
      <a cover title="next page" direction="right" bg={getThemeColor()} duration={0.6} to={nextPage}>
        Next Page →
      </a>
    )}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string
}

Pagination.defaultProps = {
  prevPage: '',
  nextPage: ''
}

export default Pagination
