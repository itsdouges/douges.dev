import Section from 'design-system/section';

interface ExampleContainerProps {
  children: React.ReactNode;
}

function ExampleContainer({ children }: ExampleContainerProps) {
  return <Section isSunken>{children}</Section>;
}

export default ExampleContainer;
