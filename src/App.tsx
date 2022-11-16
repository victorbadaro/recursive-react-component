import { RecursiveComponent } from './components/RecursiveComponent';
import './styles/global.css';

const data = {
  name: 'Level 1',
  items: [
    {
      name: 'Level 2.1',
      items: [
        { name: 'Level 3.1' },
        { name: 'Level 3.2' },
        { name: 'Level 3.3' }
      ]
    },
    {
      name: 'Level 2.2',
      items: [{
        name: 'Level 3'
      }]
    },
    {
      name: 'Level 2.3',
      items: [{
        name: 'Level 3'
      }]
    }
  ]
}

export function App() {
  return (
    <>
      <h1>Recursive React Component</h1>
      <RecursiveComponent name={data.name} items={data.items} />
    </>
  );
}