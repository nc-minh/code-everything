export function StepZero({ displayed, errors }) {
  return (
    <div className={displayed ? "displayed" : "none"}>
      <div>
        <label htmlFor="name" className="label">
          Name
        </label>
        <input id="name" name="name" type="text" />
        {errors?.name && <span className="red">{errors?.name}</span>}
      </div>
      <div>
        <label htmlFor="title" className="label">
          Title
        </label>
        <input id="title" name="title" type="text" />
        {errors?.title && <span className="red">{errors?.title}</span>}
      </div>
    </div>
  );
}
