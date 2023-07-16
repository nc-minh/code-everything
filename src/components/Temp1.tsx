import { useCallback, useEffect, useState } from 'react';

interface Props {
  isActive: boolean;
  i_email?: string;
  i_age?: string;
  i_gender?: string;
  onSetEmail: (text: string) => void;
  onSetAge: (text: string) => void;
  onSetGender: (text: string) => void;
}
function Temp1(props: Props) {
  const {
    isActive,
    i_age = '',
    i_email = '',
    i_gender = '',
    onSetEmail,
    onSetAge,
    onSetGender,
  } = props;
  const [email, setEmail] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<string>('');

  useEffect(() => {
    setEmail(i_email);
    setAge(i_age);
    setGender(i_gender);
  }, [i_email, i_age, i_gender]);

  const handleChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
      onSetEmail(e.target.value);
    },
    [onSetEmail]
  );

  const handleChangeAge = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAge(e.target.value);
      onSetAge(e.target.value);
    },
    [onSetAge]
  );

  const handleChangeGender = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setGender(e.target.value);
      onSetGender(e.target.value);
    },
    [onSetGender]
  );

  return (
    <div style={{ display: `${isActive ? '' : 'none'}` }}>
      <div>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={handleChangeEmail}
          type="text"
          name="email"
          id="email"
        />
        {!email && <span style={{ color: 'red' }}>Error</span>}
      </div>
      <div>
        <label htmlFor="age">age</label>
        <input
          value={age}
          onChange={handleChangeAge}
          type="text"
          name="age"
          id="age"
        />
      </div>
      <div>
        <label htmlFor="gender">gender</label>
        <input
          value={gender}
          onChange={handleChangeGender}
          type="text"
          name="gender"
          id="gender"
        />
      </div>
    </div>
  );
}

export default Temp1;
