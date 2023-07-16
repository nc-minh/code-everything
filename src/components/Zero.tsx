import { useCallback, useEffect, useState } from 'react';

interface Props {
  view: number;
  onOk: (status: boolean) => void;
}
function Zero(props: Props) {
  const { view, onOk } = props;
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');

  const handleSetName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    []
  );

  const handleSetTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    []
  );

  useEffect(() => {
    if (name && title) {
      onOk(true);
    }
    if (!name || !title || name === '' || title === '') {
      onOk(false);
    }
  }, [name, onOk, title]);
  return (
    <div style={{ display: `${view === 0 ? '' : 'none'}` }}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleSetName}
        />
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleSetTitle}
        />
      </div>
    </div>
  );
}

export default Zero;
