/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Section from 'design-system/section';

const styles = css({
  container: {
    margin: '0 -16px',
  },
});

interface ExampleContainerProps {
  children: React.ReactNode;
}

function ExampleContainer({ children }: ExampleContainerProps) {
  return (
    <div css={styles.container}>
      <Section isSunken>{children}</Section>
    </div>
  );
}

export default ExampleContainer;
