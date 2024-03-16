export default function Heading({ children }: Props.HasChildren) {
  // const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  // return <Tag>{children}</Tag>;
  return <h1 className="text-red-500">{children}</h1>;
}
