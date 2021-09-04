function ConstrainStyles() {
  return <div></div>;
}

`const styles = css({
    outline: 0,
    border: 0,
    backgroundColor: 'blue',
  });
  
  const disabledStyles = css({
    opacity: 0.5,
    backgroundColor: 'gray',
  });
  
  function StyledComponent({ isDisabled }) {
    return <div css={[styles, isDisabled && disabledStyles]} />;
  }`;

export default ConstrainStyles;
