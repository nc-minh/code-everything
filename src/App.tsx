'./main.css';
import { useCallback, useState } from 'react';
import Header from './components/Header';
import One from './components/One';
import Zero from './components/Zero';

function App() {
  const [view, setView] = useState(0);
  const [zeroSubmit, setZeroSubmit] = useState(false);
  const [oneSubmit, setOneSubmit] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleOnClick1 = useCallback(() => {
    setView(1);
  }, []);

  const handleOnClick0 = useCallback(() => {
    setView(0);
  }, []);

  const handleOnsubmit = useCallback(() => {
    setSubmit(true);
    console.log(zeroSubmit, oneSubmit);

    if (oneSubmit && zeroSubmit) {
      alert('Submit success!');
    } else {
      alert('Vui lòng nhập đủ thông tin!');
    }
  }, [zeroSubmit, oneSubmit]);

  const handleOnOk = useCallback((status: boolean) => {
    if (status) {
      console.log('ok', status);
      setZeroSubmit(status);
    }
  }, []);

  const handleonSubmitOk = useCallback((status: boolean) => {
    if (status) {
      console.log('submit ok', status);

      setOneSubmit(status);
    }
  }, []);

  return (
    <div>
      <Header
        view={view}
        onClick1={handleOnClick1}
        onClick0={handleOnClick0}
        onSubmit={handleOnsubmit}
      />
      <Zero view={view} onOk={handleOnOk} />
      <One view={view} onSubmitOk={handleonSubmitOk} submit={submit} />
    </div>
  );
}

export default App;
