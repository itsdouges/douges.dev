import { Sandpack } from '../sandpack';

export function Complete() {
  return (
    <Sandpack
      files={{
        '/App.js': `export default function App() {
            // yo
            const styles = {
              borderRadius: 3,
              color: 'black',
              backgroundColor: 'lightgrey',
            };

  return <h1>Hello Test</h1>;
}`,
      }}
    />
  );
}
