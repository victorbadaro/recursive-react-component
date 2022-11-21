import './styles.css';

export interface ListItem {
  name: string;
  list?: ListItem[];
}

interface RecursiveComponentProps {
  list: ListItem[];
}

export function RecursiveComponent({ list }: RecursiveComponentProps) {
  return (
    <div className="recursive">
      {list.map((listItem, index) => {
        if(listItem.list && listItem.list.length > 0) {
          return (
            <details key={index}>
              <summary>{listItem.name}</summary>
              <div className="content">
                <RecursiveComponent list={listItem.list} />
              </div>
            </details>
          );
        }

        return <div key={index}>{listItem.name}</div>
      })}
    </div>
  );
}