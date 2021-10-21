import styled from 'styled-components';
import Logo from './images/Logo.png';
import Board from './images/Board.png';

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #CDCEE6;
  padding: 0 10%;
  display: grid;
  align-content: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 25px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const LogoImg = styled.img`
  width: 80%;
`

const BoardImg = styled.img`
  width: 100%;
`

function TopContent() {
  return (
    <Wrapper>
      <div>
        <LogoImg alt="Logo" src={Logo}></LogoImg>
          <p>
            A board game created for new students to be able to grasp the experience of Chalmers in a light-hearted manner and have a more fulfilling time during their studies.
          </p>
      </div>
      <BoardImg alt="The board" src={Board} />
    </Wrapper>
  );
}

export default TopContent;
