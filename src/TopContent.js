import styled from 'styled-components';
import Logo from './images/Logo.png';
import Board from './images/Board.png';

const Wrapper = styled.div`
  height: calc(100vh - 60px);
  background-color: #CDCEE6;
  padding: 0 10%;
  display: grid;
  align-content: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
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
                En liten nice slogan av något slag.
            </p>
        </div>
        <BoardImg alt="The board" src={Board} />
    </Wrapper>
  );
}

export default TopContent;
