export default function bookDescription(props) {
  const { title, author } = props;
  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
}
