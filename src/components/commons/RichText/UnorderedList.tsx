interface UnorderedListProps {
  items: string[];
}

export const UnorderedList = ({ items }: UnorderedListProps) => {
  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx} className="ml-2 list-disc list-inside">
          {item}
        </li>
      ))}
    </ul>
  );
};
