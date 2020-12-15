import React from 'react';

import ProfileData from '../../components/ProfileData';

import { Container, Main, LeftSide, RightSide} from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={'jezzipan'}
            name={'Jessica Oliveira'}
            avatarUrl={'https://avatars0.githubusercontent.com/u/23366736?s=460&u=e8e78d5974afa7f32183f7d35386d2365d468b7f&v=4'}
            followers={22}
            following={22}
            company={''}
            location={'São Paulo, Brasil'}
            email={'jessica.leute@gmail.com'}
            blog={'https://www.linkedin.com/in/jezzpan/'}
          />
        </LeftSide>
        
        <RightSide></RightSide>
      </Main>
   </Container> 
  )  
}

export default Profile;