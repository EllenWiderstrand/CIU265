import styled from 'styled-components';
import Viktoria from './images/Viktoria.png';
import Ellen from './images/Ellen.png';
import Kajsa from './images/Kajsa.png';
import Karin from './images/Karin.png';
import Sandra from './images/Sandra.png';
import Hanna from './images/Hanna.png';

const Wrapper = styled.div`
  min-height: 320px;
  background-color: #000000;
  color: #FFFFFF;
  padding: 0 10%;

  @media (max-width: 1250px) {
    padding: 0;
  }
`

const TeamText = styled.h2`
    padding: 20px 0 30px;
    margin: unset;
    text-align: center;
`

const MembersWrapper = styled.div`
  display: grid;
  align-content: center;
  align-items: center;
  grid-template-columns: repeat(6, 1fr);

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 350px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const MemberImage = styled.div`
    width: 105px;
    height: 105px;
    padding: 25px;
    background: url(${props => props.image}) #FFFFFF;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-origin: content-box;
    border-radius: 50%;
`

const MemberWrapper = styled.a`
    display: grid;
    justify-items: center;
    color: inherit;
    text-decoration: none;

    &:hover {
        color: #CDCEE6;

        ${MemberImage} {
            background-color: #CDCEE6;
        }
    }
`

function Footer() {
  return (
    <Wrapper>
        <TeamText>The team</TeamText>
        <MembersWrapper>
            <MemberWrapper href="https://www.linkedin.com/in/kajsabjarang/" target="blank">
                <MemberImage image={Kajsa} />
                <p>Kajsa Bjäräng</p>
            </MemberWrapper>
            <MemberWrapper href="https://www.linkedin.com/in/viktoriaenderstein/" target="blank">
                <MemberImage image={Viktoria} />
                <p>Viktoria Enderstein</p>
            </MemberWrapper>
            <MemberWrapper href="https://www.linkedin.com/in/hannajacobsson/" target="blank">
                <MemberImage image={Hanna} />
                <p>Hanna Jacobsson</p>
            </MemberWrapper>
            <MemberWrapper href="https://www.linkedin.com/in/sandra-ohl%C3%A9n-35779b159/" target="blank">
                <MemberImage image={Sandra} />
                <p>Sandra Ohlén</p>
            </MemberWrapper>
            <MemberWrapper href="https://www.linkedin.com/in/karin-silvander-ch2412" target="blank">
                <MemberImage image={Karin} />
                <p>Karin Silvander</p>
            </MemberWrapper>
            <MemberWrapper href="https://www.linkedin.com/in/ellenwiderstrand/" target="blank" >
                <MemberImage image={Ellen} />
                <p>Ellen Widerstrand</p>
            </MemberWrapper>
        </MembersWrapper>
    </Wrapper>
  );
}

export default Footer;
