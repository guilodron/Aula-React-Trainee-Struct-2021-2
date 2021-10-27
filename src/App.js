import { GlobalStyle } from './global';
import Header from './components/Header';
import Input from './components/Input';
import Members from './components/Members';
import { useState } from 'react';

function App() {

  const [members, setMembers] = useState([])
  const addMember = (input) => {
    setMembers([...members, input])
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Input addMember={addMember} />
      <Members members={members} />
    </>
  );
}

export default App;
