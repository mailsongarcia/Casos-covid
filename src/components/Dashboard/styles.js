import styled from 'styled-components';

export const Container = styled.main`
margin: 0 auto;

 

`;

export const Content = styled.div`
  padding: 5rem;

  margin: 0 auto;

  p {
    font-size: 18px;
    color: #000;
  }
  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    font-size: 17px;

    th  {
      background: var(--red);
      color: #fff;
      font-weight: 600;
      padding: 1rem 2rem;
      line-height: 1.5rem;
    }

    td { 
      padding: 1rem 2rem;
      margin: 5px;
      border: 0;
      background: var(--green);
      font-weight: 500;
      color: #fff;
      text-align: center;

      :hover {
        opacity:  0.9;
       
      }
      
    }
  }

`;

export const Header = styled.header`
  margin: 0 auto;
  display: flex;
  align-items: center;
  background: var(--whithe);
  box-shadow: 0px 4px 4px rgba(47, 37, 68, 0.15);
  font-size: 18px;
  
  img {
    width: 154px;
    height: 199px;
  }

  select {
    width: 80%;
    height: 3.25rem;
    border: 1px solid #E1DFE0;
    box-sizing: border-box;
    border-radius: 4px 0px 0px 4px;
    margin-left: 2rem;
    padding-left: 0.625rem;
    font-size: small;
    background-color: #fff;
 



    
  }
`;
