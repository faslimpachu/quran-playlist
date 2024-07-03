// HomeStyle.js

import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;

`;

export const Title = styled.h1`
  font-size: 2em;
  color: #4a90e2;
  margin-bottom: 20px;
`;
export const CardDiv = styled.div`
    


    .card-title{
        display: flex;
        flex-direction: column;
        gap: 20px;
        p{
            width: 90%;

            @media (max-width: 330px) {
             width: 100%;
            }
            
           }
    }
@media (max-width: 780px) {
        flex-direction: column;
        gap: 5px;
        margin-bottom: 48px;

        .card-title{
           gap: 10px;
           

           
        }
}
@media (max-width: 709px) {
      
       

        .card-title{
           gap: 10px;
        }
}
@media (max-width: 430px){
   
}

`
export const SuraContainer = styled.div`
  width: 80%;
  background: white;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
 
`;

export const SuraTitle = styled.h2`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 20px;
`;

export const SessionList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const IframeContainer = styled.div`
  position: relative;
  padding-bottom: 50%; 
  height: 0;
  overflow: hidden;
  width: 100%; 
  max-width: 560px;
  background: #000;
  border-radius: 5px;
  margin-bottom: 20px;
  
 

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 780px){
    padding-bottom: 50%;
  }
  @media (max-width: 768px){
    padding-bottom: 70%;
  }
  @media (max-width: 425px){
    padding-bottom: 50%;
  }

`;

export const VideoTitle = styled.h3`

`;

export const VideoDescription = styled.p`

`;
