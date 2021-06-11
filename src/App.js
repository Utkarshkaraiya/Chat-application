import { useEffect } from 'react';
import { ChatEngine} from 'react-chat-engine';
import './App.css';
import LoginForm from './LoginForm';

function App() {

  if (!localStorage.getItem('username')) return <LoginForm />;

  return (



    <ChatEngine 
    height="100vh"
    projectID="e393001f-b16a-4c57-8270-681fc34c4940"
    userName="chat application"
    
    userSecret="123123"

    />
  );
}

export default App;
