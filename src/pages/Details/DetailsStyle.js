import styled from "styled-components"
import backgroundImage from "../../services/assets/backgroundImage.svg"

export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background-color: rgba(94, 94, 94, 1);
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-position: center -340px; 
    background-size: cover;
    overflow: hidden;
`;

export const Title = styled.h1`
  margin-right: 80%;
  margin-bottom: 43px;
  margin-top: 43px;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 50px; 
  

  @media only screen and (min-width: 480px) and (max-width: 768px){
    font-size: 40px;
    }

  @media only screen and (max-width: 480px){
    font-size: 20px;
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 65vh;
    width: 90vw;
    border-radius: 38px;
    background-color: #729F92;
    padding: 20px;
    margin-bottom: 20px;
    gap: 40px;
    position: relative; 

    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-position: right; 
    background-size: contain; 
    
    @media only screen and (min-width: 1025px) and (max-width: 1366px){
    height: 80vh;
    width: 90vw;
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 220vh;
    width: 94vw;
    }

    @media only screen and (min-width: 480px) and (max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 220vh;
    width: 94vw;
    }

    @media only screen and (max-width: 480px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 220vh;
    width: 94vw;
    }
;
`

export const DivPixel = styled.div`

  @media only screen and (min-width: 768px) and (max-width: 1024px){
    order: 3;
    }

  @media only screen and (min-width: 480px) and (max-width: 768px){
    order: 3;
    }

  @media only screen and (max-width: 480px){
      order: 3;
    }
`

export const ImgPixel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 220px;
  border-radius: 8px;
  border: 2px;
  background-color: white;
  padding: 20px;
  margin: 20px;

  img {
    width: 220px;
    height: 220px;
  }
`

export const InfoPoke = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  gap: 4px;
  margin-bottom: 30px;

  .infoId {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    color: white;
    margin-left: 70px;
  }

  .infoName {
    font-family: 'Inter', sans-serif;
    font-size: 32px;
    font-weight: 700;
    line-height: 39px;
    letter-spacing: 0em;
    color: white;
    margin-left: 70px;
  }

  .infoType {
  display: flex; 
  gap: 8px; 
  margin-left: 70px;
  }
`

export const Moves = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 260px;
  height: 300px;
  border-radius: 8px;
  background-color: white;
  padding: 14px;
  gap: 20px;
  overflow: scroll;
  overflow-x: hidden;
  margin-left: 70px;
  order: 1;

  h2 {
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 800;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 70px;
  }

  .div-list {
  gap: 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: start;
  flex-wrap: wrap;
  }

  .move-list {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  padding: 12px; 
  background-color: #ECECEC;
  border-radius: 10px;
  border: 2px dashed #00000014; 
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px){
    order: 1;
    }

  @media only screen and (min-width: 480px) and (max-width: 768px){
    
    }

  @media only screen and (max-width: 480px){
    
    } 
`

export const ImgLateral = styled.img`
    width: 260px;
    height: 260px;
    position: absolute; 
    top: -80px; 
    right: 80px; 

    @media only screen and (min-width: 1025px) and (max-width: 1366px){
    width: 260px;
    height: 260px;

    position: absolute; 
    top: -160px; 
    right: 20px; 
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px){
    width: 260px;
    height: 260px;

    position: absolute; 
    top: -140px; 
    right: -20px; 
    }

    @media only screen and (min-width: 480px) and (max-width: 768px){
    width: 220px;
    height: 220px;

    position: absolute; 
    top: -140px; 
    right: -20px; 
    }

    @media only screen and (max-width: 480px){
    width: 160px;
    height: 160px;

    position: absolute; 
    top: -100px; 
    right: -10px; 
    }
`;







