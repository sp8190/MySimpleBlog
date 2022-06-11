import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const PROFILE_IMAGE_LINK =
  'https://avatars.githubusercontent.com/u/56158143?s=400&u=bdb054721f190db5053a47efdfbc6464af7e399e&v=4'

// 해당 부분 내부에 정의되는 스타일은 모두 너비가 768px 이하일 때 적용
// 일반적으로 사용되는 태블릿 너비인 768px
const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
  
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
}

export default ProfileImage