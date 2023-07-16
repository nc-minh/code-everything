import { useCallback, useEffect, useState } from 'react';

interface Props {
  isActive: boolean;
  i_id?: string;
  i_username?: string;
  i_password?: string;
}
function Temp2(props: Props) {
  const { isActive, i_id = '', i_password = '', i_username = '' } = props;
  const [idd, setIdd] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    setIdd(i_id);
    setUsername(i_username);
    setPassword(i_password);
  }, [i_id, i_username, i_password]);

  const handleChangeId = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIdd(e.target.value);
    },
    []
  );

  const handleChangeUsername = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value);
    },
    []
  );

  const handleChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );
  return (
    <div style={{ display: `${isActive ? '' : 'none'}` }}>
      <div>
        <label htmlFor="id">id</label>
        <input
          value={idd}
          onChange={handleChangeId}
          type="text"
          name="id"
          id="id"
        />
        {!idd && <span style={{ color: 'red' }}>Error</span>}
      </div>
      <div>
        <label htmlFor="username">username</label>
        <input
          value={username}
          onChange={handleChangeUsername}
          type="text"
          name="username"
          id="username"
        />
        {!username && <span style={{ color: 'red' }}>Error</span>}
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input
          value={password}
          onChange={handleChangePassword}
          type="text"
          name="password"
          id="password"
        />
      </div>
    </div>
  );
}

export default Temp2;
