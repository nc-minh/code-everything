interface Props {
  id: number;
  data: {
    templateType: number;
    value: any;
  };
  displayed: boolean;
  onTemplateChange: (id: number, type: number) => void;
  errors: any;
}

export function Template(props: Props) {
  const { data, displayed, onTemplateChange, id, errors } = props;
  const { templateType, value } = data;

  return (
    <div className={displayed ? "displayed" : "none"}>
      <div className="py-15">
        <span className="pr-20">Template</span>
        <select
          onChange={(e: any) => onTemplateChange(id, +e.target.value)}
          name="templateType"
        >
          <option value={0}>None</option>
          <option value={1}>Template 1</option>
          <option value={2}>Template 2</option>
        </select>
        {errors?.templateType && (
          <span className="red">{errors?.templateType}</span>
        )}
      </div>
      {!!templateType &&
        (templateType === 1 ? (
          <>
            <div>
              <label htmlFor={`email_${id}`} className="label">
                email
              </label>
              <input id={`email_${id}`} name={`email_${id}`} type="text" />
              {errors?.[`email_${id}`] && (
                <span className="red">{errors?.[`email_${id}`]}</span>
              )}
            </div>
            <div>
              <label htmlFor={`age_${id}`} className="label">
                age
              </label>
              <input id={`age_${id}`} name={`age_${id}`} type="text" />
              {errors?.[`age_${id}`] && (
                <span className="red">{errors?.[`age_${id}`]}</span>
              )}
            </div>
            <div>
              <label htmlFor={`gender_${id}`} className="label">
                gender
              </label>
              <input id={`gender_${id}`} name={`gender_${id}`} type="text" />
              {errors?.[`gender_${id}`] && (
                <span className="red">{errors?.[`gender_${id}`]}</span>
              )}
            </div>
          </>
        ) : (
          <div>
            <div>
              <label htmlFor={`id_${id}`} className="label">
                id
              </label>
              <input id={`id_${id}`} name={`id_${id}`} type="text" />
              {errors?.[`id_${id}`] && (
                <span className="red">{errors?.[`id_${id}`]}</span>
              )}
            </div>
            <div>
              <label htmlFor={`username_${id}`} className="label">
                username
              </label>
              <input
                id={`username_${id}`}
                name={`username_${id}`}
                type="text"
              />
              {errors?.[`username_${id}`] && (
                <span className="red">{errors?.[`username_${id}`]}</span>
              )}
            </div>
            <div>
              <label htmlFor={`password_${id}`} className="label">
                password
              </label>
              <input
                id={`password_${id}`}
                name={`password_${id}`}
                type="text"
              />
              {errors?.[`password_${id}`] && (
                <span className="red">{errors?.[`password_${id}`]}</span>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}
