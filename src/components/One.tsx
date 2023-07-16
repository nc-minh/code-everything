import { useCallback, useEffect, useState } from 'react';
import Temp1 from './Temp1';
import Temp2 from './Temp2';

type Template1 = {
  email: string;
  age: string;
  gender: string;
};

type Template2 = {
  id: string;
  username: string;
  password: string;
};

type View = {
  id: number;
  name: string;
  template: number;
  template1?: Template1;
  template2?: Template2;
};

interface Props {
  view: number;
  onSubmitOk: (status: boolean) => void;
  submit: boolean;
}

function One(props: Props) {
  const { view, onSubmitOk, submit } = props;
  const [listView, setListView] = useState<View[]>([
    {
      id: 0,
      name: 'View0',
      template: 0,
    },
  ]);
  const [currentView, setCurrentView] = useState<View>(listView[0]);
  const [viewActive, setViewActive] = useState(0);
  const [currentTemplate, setCurrentTemplate] = useState<number>(0);

  const handleAddView = useCallback(() => {
    const newLV = listView.map((vs) => {
      if (vs.id === currentView.id) {
        return currentView;
      }
      return vs;
    });

    setListView(newLV);

    for (const element of newLV) {
      if (element.template === 0) {
        return;
      }

      if (element.template === 1) {
        if (!element.template1?.email) {
          return;
        }
      }

      if (element.template === 2) {
        if (!element.template2?.id) {
          return;
        }
        if (!element.template2?.username) {
          return;
        }
      }
    }
  }, [currentView, listView]);

  useEffect(() => {
    if (submit) {
      console.log('submit', submit);

      const newLV = listView;
      const newCurr = currentView;

      for (let index = 0; index < newLV.length; index++) {
        if (newLV[index].id === currentView.id) {
          newLV[index] = newCurr;
        }
      }

      for (const element of newLV) {
        if (element.template === 0) {
          onSubmitOk(false);
          return;
        }

        if (element.template === 1) {
          if (!element.template1?.email || element.template1?.email === '') {
            console.log('lelelelel');

            onSubmitOk(false);
            return;
          }
        }

        if (element.template === 2) {
          if (!element.template2?.id || element.template2?.id === '') {
            onSubmitOk(false);
            return;
          }
          if (
            !element.template2?.username ||
            element.template2?.username === ''
          ) {
            onSubmitOk(false);
            return;
          }
        }
      }
      console.log('newLV', newLV);

      console.log('pass all validate');

      onSubmitOk(true);
    }
  }, [onSubmitOk, submit, listView, currentView]);

  const handleChangeViewActive = useCallback(
    (id: number) => () => {
      const curr = listView.find((vs) => vs.id === id) as View;
      setViewActive(id);
      setCurrentView(curr);
      setCurrentTemplate(curr.template);
    },
    [listView]
  );

  const handleSelectTemplate = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setCurrentTemplate(Number(e.target.value));
      setListView((prevViews) =>
        prevViews.map((vs) => {
          if (vs.id === viewActive) {
            return {
              ...vs,
              template: Number(e.target.value),
            };
          }
          return vs;
        })
      );

      setCurrentView({
        ...currentView,
        template: Number(e.target.value),
      });
    },
    [currentView, viewActive]
  );

  console.log('listView', listView);

  const handleOnSetEmail = useCallback(
    (email: string) => {
      console.log('email', email);
      const t = {
        ...currentView.template1,
        email,
      } as Template1;

      setCurrentView({
        ...currentView,
        template1: t,
      });
    },
    [currentView]
  );

  console.log('currentView', currentView);

  const handleOnSetAge = useCallback(
    (age: string) => {
      console.log('age', age);
      const t = {
        ...currentView.template1,
        age,
      } as Template1;

      setCurrentView({
        ...currentView,
        template1: t,
      });
    },
    [currentView]
  );

  const handleOnSetGender = useCallback(
    (gender: string) => {
      console.log('gender', gender);
      const t = {
        ...currentView.template1,
        gender,
      } as Template1;

      setCurrentView({
        ...currentView,
        template1: t,
      });
    },
    [currentView]
  );

  return (
    <div style={{ display: `${view === 1 ? '' : 'none'}` }}>
      <div>
        {listView.map((vs) => (
          <button
            style={{
              color: `${vs.id === viewActive ? 'red' : ''}`,
            }}
            onClick={handleChangeViewActive(vs.id)}
            key={vs.id}
          >
            {vs.name}
          </button>
        ))}
        <button onClick={handleAddView}>+</button>
      </div>
      <div>
        <span>Template</span>
        <select
          name=""
          id=""
          value={currentTemplate}
          onChange={handleSelectTemplate}
        >
          <option value={0}>None</option>
          <option value={1}>Template 1</option>
          <option value={2}>Template 2</option>
        </select>
        {currentTemplate === 0 && <span style={{ color: 'red' }}>Error</span>}
      </div>

      {currentTemplate === 1 && (
        <Temp1
          isActive={1 === currentTemplate}
          i_age={currentView.template1?.age}
          i_email={currentView.template1?.email}
          i_gender={currentView.template1?.gender}
          onSetAge={handleOnSetAge}
          onSetEmail={handleOnSetEmail}
          onSetGender={handleOnSetGender}
        />
      )}

      {currentTemplate === 2 && (
        <Temp2
          isActive={2 === currentTemplate}
          i_id={currentView.template2?.id}
          i_password={currentView.template2?.password}
          i_username={currentView.template2?.username}
        />
      )}
    </div>
  );
}

export default One;
