import styled from 'styled-components';

const CardImg = styled.img`
  width: 100%;
`

/* This container is needed to position the front and back side */
const CardInner = styled.div `
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`

const Wrapper  = styled.div`
  background-color: transparent;
  width: 270px;
  height: 180px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */

  &:hover ${CardInner}{
    transform: rotateY(180deg);
  }
`
  
  /* Position the front and back side */
const CardSide = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
  
  /* Style the front side (fallback if image is missing) */
const CardFront = styled(CardSide) ``
  
  /* Style the back side */
const CardBack = styled(CardSide) `
    transform: rotateY(180deg);
`

function FlipCard({firstImage, secondImage}) {
  return (
    <Wrapper>
        <CardInner>
            <CardFront>
                <CardImg alt="Examples of event cards." src={firstImage}/>
            </CardFront>
            <CardBack>
                <CardImg alt="Examples of event cards." src={secondImage}/>
            </CardBack>
        </CardInner>
    </Wrapper>
  );
}

export default FlipCard;
