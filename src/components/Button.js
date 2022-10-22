import PropTypes from "prop-types";

function Button({ text, name = "User" }) {
  if (!text) {
    console.error("Text is required");
  }

  return (
    <button
      onClick={function () {
        alert(`Hello ${name}`);
      }}
    >
      {text} - {name}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  name: "SomeUser",
};

export default Button;
