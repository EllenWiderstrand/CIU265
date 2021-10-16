import styled from 'styled-components';
import Logo from './images/Logo.png';
import TopContent from './TopContent';

const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
`;

const Header = styled.div`
    width: 100%;
    height: 60px;
    background-color: #CDCEE6;
`

const HeaderLogo = styled.img`
  height: 30px;
  padding: 15px;
`

function App() {
  return (
    <Wrapper>
      <Header>
        <HeaderLogo alt="Logo" src={Logo}></HeaderLogo>
      </Header>
      <TopContent />
    </Wrapper>
  );
}

export default App;
