import { BottomSheet } from "./components/BottomSheet";

function App() {
  return (
    <>
      <div>
        <h1>Slide Up Drawer Example</h1>
        <BottomSheet>
          <p>This is the content of the drawer.</p>
          <p>You can add any UI components here!</p>
        </BottomSheet>
      </div>
    </>
  );
}

export default App;
