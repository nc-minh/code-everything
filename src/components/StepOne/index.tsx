import { useRef, useState } from "react";
import { Template } from "../Template";

export function StepOne({ displayed, errors, formRef }) {
  const buttonRef = useRef();
  const [views, setViews] = useState([
    {
      templateType: 0,
    },
  ] as any);
  const [activeView, setActiveView] = useState(0);

  const handleAddView = () => {
    if (views[activeView]?.templateType === 0) {
      return;
    }

    const regex = /^(name|title|email|id|username)/i;
    for (let i = 0; i < formRef.current?.elements?.length; i++) {
      const element = formRef.current?.elements?.[i];
      if (regex.test(element.name)) {
        if (!element?.value) return;
      }
    }

    setViews((prev) => [...prev, { templateType: 0 }]);
    setActiveView(views.length);
  };

  const handleTemplateTypeChange = (id: number, type: number) => {
    const newViews = views.map((item, index) =>
      index === id
        ? {
            ...item,
            templateType: type,
          }
        : item
    );
    setViews(newViews);
  };

  const handleViewChange = (e: any) => {
    setActiveView(+e.target.value?.replace("view", ""));
  };

  return (
    <div className={displayed ? "displayed" : "none"}>
      <div className="listViews">
        {views.map((_, index) => (
          <input
            type="button"
            value={`view${index}`}
            key={index}
            className={activeView === index ? "step-active" : ""}
            onClick={handleViewChange}
          />
        ))}
        <input type="submit" value="+" onClick={handleAddView} />
      </div>
      <div className="templates">
        {views.map((view, index) => (
          <Template
            key={index}
            id={index}
            data={view}
            displayed={activeView === index}
            onTemplateChange={handleTemplateTypeChange}
            errors={errors}
          />
        ))}
      </div>
      <button hidden={true} ref={buttonRef}></button>
    </div>
  );
}
