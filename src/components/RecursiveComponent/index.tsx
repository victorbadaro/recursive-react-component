import './styles.css';

interface RecursiveComponentProps {
  name: string;
  items?: RecursiveComponentProps[];
}

export function RecursiveComponent({ name, items }: RecursiveComponentProps) {
  const hasChildren = items && items.length;

  return (
    <ul>
      <li>{name}</li>
      {hasChildren && items.map((item, index) => (
        <RecursiveComponent key={index} name={item.name} items={item.items} />
      ))}
    </ul>
  );
}