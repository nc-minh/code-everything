interface Props {
  onClick1: () => void;
  onClick0: () => void;
  view: number;
  onSubmit: () => void;
}

function Header(props: Props) {
  const { onClick1, onClick0, view, onSubmit } = props;
  return (
    <div>
      <button onClick={onSubmit}>submit</button>
      <hr />
      <div>
        <button
          style={{
            color: `${view === 0 ? 'red' : ''}`,
          }}
          onClick={onClick0}
        >
          0
        </button>
        <button
          style={{
            color: `${view === 1 ? 'red' : ''}`,
          }}
          onClick={onClick1}
        >
          1
        </button>
      </div>
    </div>
  );
}

export default Header;
