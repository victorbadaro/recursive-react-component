import { ListItem, RecursiveComponent } from './components/RecursiveComponent';
import './styles/global.css';

const list: ListItem[] = [
  {
    name: 'Level 1.1'
  },
  {
    name: 'Level 1.2'
  },
  {
    name: 'Level 1.3'
  },
  {
    name: 'Level 1.4',
    list: [
      {
        name: 'Level 2.1'
      },
      {
        name: 'Level 2.2'
      },
      {
        name: 'Level 2.3',
        list: [
          {
            name: 'Level 3.1'
          }
        ]
      },
      {
        name: 'Level 2.4'
      }
    ]
  },
  {
    name: 'Level 1.5',
    list: [
      {
        name: 'Level 2.1',
        list: [
          {
            name: 'Level 3.1'
          },
          {
            name: 'Level 3.2',
            list: [
              {
                name: 'Level 4.1'
              },
              {
                name: 'Level 4.2'
              },
              {
                name: 'Level 4.3'
              }
            ]
          },
          {
            name: 'Level 3.3'
          }
        ]
      }
    ]
  }
];

export function App() {
  return (
    <>
      <h1>Recursive React Component</h1>
      <RecursiveComponent list={list} />
    </>
  );
}