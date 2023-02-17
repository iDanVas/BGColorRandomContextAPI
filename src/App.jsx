import styled from "styled-components";
import { CgLock as LockedIcon, CgLockUnlock as OpenIcon} from "react-icons/cg";


function App() {

  return (
    <GridContainer>
        <Div>
          <h1>1</h1>
          <Button><OpenIcon size={30}/></Button>
        </Div>
        <Div>
          <h1>2</h1>
          <Button><OpenIcon size={30}/></Button>
        </Div>
        <Div>
          <h1>3</h1>
          <Button><OpenIcon size={30}/></Button>
        </Div>
        <Div>
          <h1>4</h1>
          <Button><OpenIcon size={30}/></Button>
        </Div>
        <Div>
          <h1>5</h1>
          <Button><OpenIcon size={30}/></Button>
        </Div>
    </GridContainer>
  )
};

export default App;


const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5 , 1fr);
  `;

const Div = styled.div`
  background-color: green;
  height: 100vh;

  display: grid;
  grid-template-rows: 1fr ,1fr;
  justify-items: center;
  align-items: center;
`;

const Button = styled.button`
height: 40px;
width: 40px;
border-radius: 95%;
`;