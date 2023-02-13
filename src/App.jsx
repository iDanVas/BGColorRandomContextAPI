import styled from "styled-components";
import { CgLock as LockedIcon, CgLockUnlock as OpenIcon} from "react-icons/cg";


function App() {

  return (
    <FlexContainer>
      <Ul>
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
      </Ul>
    </FlexContainer>
  )
};

export default App;


const FlexContainer = styled.div`
  /* background-color: black; */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* align-items: stretch; */
  height: 100vh;
  `;

const Div = styled.div`
  background-color: green;
  border: 2px black dashed;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex: 1 1;
`;

const Ul = styled.ul`
  display: flex;
`;
const Button = styled.button`
height: 40px;
width: 40px;
border-radius: 95%;
`;