import styled from 'styled-components';
import MainPage from './pages/MainPage';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2C3E50;
`;

export function App() {
  return (
    <StyledApp>
      <MainPage />
    </StyledApp>
  );
}

export default App;
