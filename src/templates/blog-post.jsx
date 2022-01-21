import React from 'react'

import PropTypes from 'prop-types'

import LayoutCustom from 'components/LayoutCustom'
import RecomendedPosts from 'components/RecomendedPosts'
import Comments from 'components/Comments'
import Seo from 'components/Seo'

import * as S from 'styles/post'

const BlogPost = ({ data, pageContext, post }) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
    <LayoutCustom>
      <Seo title={post.frontmatter.title} description={post.frontmatter.description} image={post.frontmatter.image} />
      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date} • {post.timeToRead} min of read
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </S.MainContent>
      <RecomendedPosts next={next} previous={previous} />
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </LayoutCustom>
  )
}

BlogPost.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  pageContext: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  post: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
}

export default BlogPost
