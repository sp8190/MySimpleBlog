import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby' // graphql import
import Text from 'components/Text'

/*
src/pages 내의 모든 파일의 이름을 통해 페이지에 접근할 수 있게 구현할 예정

예를 들어 about.tsx 파일이 존재한다면 Gatsby 내부적으로 
"your-web-site.com/about" 과 같은 페이지 링크를 생성

여기서 about.tsx 파일을 src/pages/info 디렉토리로 이동한다면?
Gatsby는 이에 맞게 디렉토리명도 반영하므로 "your-web-site.com/info/about"과 같은 페이지 링크를 생성
*/

type InfoPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
      }
    }
  }
}

const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {
  return (
    <div>
      <Text text={title} />
      <Text text={description} />
      <Text text={author} />
      <a href="/">To Main</a>
    </div>
  )
}

export default InfoPage

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`