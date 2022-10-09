import Test from "components/TestComponent";
import { Provider } from "react-redux";
import { store } from "../state/index";

export default function testing() {
	
    return (
        <>
			<Provider store={store}>
            <Test />
			</Provider>
        </>
    );
}
