function DynamicStyles() {
  return <div></div>;
}

`const styles = (isDisabled) => {
    return {
      outline: 0,
      border: 0,
      backgroundColor: 'blue',
      ...isDisabled ? {
        opacity: 0.5,
        backgroundColor: 'gray',
      },
    };
  };
  
  
  function StyledComponent({ isDisabled }) {
    return <div css={styles(isDisabled)} />;
  }`;

export default DynamicStyles;
