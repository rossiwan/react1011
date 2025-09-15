import { useState } from 'react';
import './App.css';
import ButtonAdd from './components/ButtonAdd';
import Headdertext from './components/Headdertext';

// Type ของสมาชิก
type Member = { 
  nameTH: string;    
  nameEN: string;    
  heightCm: number;  
  age: number;       
  imageUrl?: string; 
  group?: string;    // ใช้สำหรับกรองวง
}; 

const list_MEMBERS: Member[] = [
  { nameTH: "อลัน พศวีร์ ศรีอรุโณทัย", nameEN: "Alan", heightCm: 185, age: 23, 
    imageUrl: "https://s359.kapook.com/pagebuilder/72b3c153-e0c9-4a1d-acbd-f3ec538b89a5.jpg", group: "Other" 
  },
  { nameTH: "จินวู", nameEN: "Jinwu", heightCm: 178, age: 21,
    imageUrl: "https://s359.kapook.com/rq/600/auto/50/pagebuilder/293424.jpg", group: "Sajaboy"
  },
  { nameTH: "แอบบี้", nameEN: "Abby", heightCm: 178, age: 20,
    imageUrl: "https://s359.kapook.com/rq/600/auto/50/pagebuilder/293425.jpg", group: "Sajaboy"
  },
  // เพิ่มสมาชิกอื่น ๆ ...
];

function App() {
  const [name, setName] = useState('CSMJU');
  const [message, setMessage] = useState('สอบเสร็จแล้ว สบายใจจัง');
  const status = false;

  return (
    <>
      <ul>
        {list_MEMBERS.map((member, index) => (
          <li key={index} className={member.group === 'Sajaboy' ? 'blue-txt' : 'orange-txt'}>
            {member.nameTH} ({member.nameEN}) 
            {member.imageUrl && <img src={member.imageUrl} alt={member.nameEN} />}
          </li>
        ))}
      </ul>

      <div>
        <Headdertext title="Header Computer Science" status={false} />
        <Headdertext title="Header Maejo University"  status={true} />
      </div>

      <div className="App">
        <h1>Vite + React</h1>
        <div className="card">
          <ButtonAdd />
          <p>Edit <code>src/App.tsx</code> and save to test HMR</p>
        </div>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </div>
    </>
  );
}

export default App;

