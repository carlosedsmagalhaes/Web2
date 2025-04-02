import { LetterProvider } from "../contexts/LetterCtx";
import Display from "./Display";
import Input from "./Input";

function Exercise1() {
    return (
        <>
            <LetterProvider>
                <Input />
                <Display />
            </LetterProvider>
        </>

    )

}

export default Exercise1