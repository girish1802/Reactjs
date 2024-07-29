

const Note = ( myData ) => {
  return (
    <div className="note">
      <h2>{myData.title}</h2>
      <p>{myData.content}</p>
    </div>
  );
};
export default Note;