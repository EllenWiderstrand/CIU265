import styled from 'styled-components';
import Logo from './images/Logo.png';
import TopContent from './TopContent';
import Footer from './Footer';
import Information from './Information';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Header = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: #000000;
  z-index: 1;
`

const HeaderLogo = styled.img`
  height: 30px;
  padding: 15px;
  filter: invert(1);

  &:hover {
    cursor: pointer;
  }
`

function App() {
  return (
    <Wrapper>
      <Header>
        <HeaderLogo alt="Logo" onClick={() => window.scrollTo(0, 0)} src={Logo}></HeaderLogo>
      </Header>
      <TopContent />
      <Information />
      <Footer />
    </Wrapper>
  );
}

export default App;
