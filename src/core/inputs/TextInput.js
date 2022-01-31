import React from "react";

/**
 * Renders a text input.
 * @author Ethan Cannelongo
 * @date   01/30/2022
 */
const TextInput = props => {
  return (
    <>
      <input
        className='input'
        value={props.value}
        onChange={props.onChange}
        type={"text"}
        {...props}
      />
    </>
  );
};

export default TextInput;
