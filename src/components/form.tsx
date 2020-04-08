import React, { useRef } from "react";

interface MovieFormProps {
  onSearch(title: string): void;
}

const Form: React.FC<MovieFormProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      props.onSearch(ref.current!.value);
      ref.current!.value = "";
      //console.log(ref.current!.value);
    }
  };

  return (
    <div className="row">
      <form className="col s12 form-1">
        <div className="input-field">
          <input
            id="form"
            placeholder="enter the name of movie"
            type="text"
            className="validate"
            ref={ref}
            onKeyPress={keyPressHandler}
          />
          <span className="helper-text" data-error="wrong" data-success="right">
            For example: Star Wars
          </span>
        </div>
      </form>
    </div>
  );
};

export default Form;
