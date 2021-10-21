import styled from 'styled-components';
import {ReactComponent as PlayersIcon} from './images/players.svg';
import EventCards from './images/event.png';
import GradeCards from './images/Grade.png';
import FlipCard from './FlipCard';
import EventFront from './images/EventFront.png';
import EventBack from './images/EventBack.png';
import GradeFront from './images/GradeFront.png';
import GradeBack from './images/GradeBack.png';
import Rules from './images/Rules.png';
import StudyFront from './images/StudyFront.png';
import StudyBack from './images/StudyBack.png';
import ChallengeFront from './images/ChallengeFront.png';
import ChallengeBack from './images/ChallengeBack.png';

const Wrapper = styled.div`
  min-height: 320px;
  background-color: #CDCEE6;
  padding: 0 10% 60px 10%;
  display: grid;
  align-content: center;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const RulesImg = styled.img`
  grid-column: span 2;
  width: 100%;

  @media (max-width: 900px) {
    grid-column: span 1;
  }
`

const InfoImg = styled.img`
  width: auto;
  max-height: 500px;

  @media (max-width: 400px) {
    max-height: unset;
    width: 100%;
  }
`

const CardInfo = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
`

function Information() {
  return (
    <Wrapper>
        <PlayersIcon width="100%"/>
        <p>The game is intended for 3-6 players.</p>
        <RulesImg alt="The rules of the game." src={Rules}/>
        <CardInfo>
            <p>Learn about events, traditions and happenings at Chalmers.</p>
            <FlipCard firstImage={EventFront} secondImage={EventBack}/>
        </CardInfo>
        <InfoImg alt="Examples of event cards." src={EventCards}/>
        <InfoImg alt="Examples of grade cards." src={GradeCards}/>
        <CardInfo>
            <p>Pass your exams and meet new friends.</p>
            <FlipCard firstImage={GradeFront} secondImage={GradeBack}/>
        </CardInfo>
        <CardInfo>
            <p>Collect study cards by studying.</p>
            <FlipCard firstImage={StudyFront} secondImage={StudyBack}/>
        </CardInfo>
        <CardInfo>
            <p>Learn about Chalmers and Gothenburg by completing challenges.</p>
            <FlipCard firstImage={ChallengeFront} secondImage={ChallengeBack}/>
        </CardInfo>
    </Wrapper>
  );
}

export default Information;
