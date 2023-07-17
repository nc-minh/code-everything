interface Props {
  onSubmit: () => void;
}

export function Header(props: Props) {
  const { onSubmit } = props;
  return (
    <div className="header">
      <input type="button" onClick={onSubmit} value="submit" />
    </div>
  );
}
