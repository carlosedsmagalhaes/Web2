import Form from "./components/Form";
import List from "./components/List";
import { ProviderCar } from "./contexts/CtxCar";

export default function App2() {
  return (
    <>
      <ProviderCar>
        <Form/>
        <List/>
      </ProviderCar>
      
    </>
  );
}