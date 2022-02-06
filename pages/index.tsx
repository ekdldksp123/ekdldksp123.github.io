import { useEffect } from "react";
import Main from "../components/main";
import { init } from "../public/styles/config";

export default function App() {
    useEffect(() => {
        init();
    }, []);
    
    return <Main/>;
}


