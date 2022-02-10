import { useEffect } from "react";
import Main from "../components/main";
import 'setimmediate';
export default function App() {
    useEffect(() => {
        document.styleSheets[0].insertRule("::-webkit-scrollbar { width: 10px; }");   
        document.styleSheets[0].insertRule("::-webkit-scrollbar-track { background: transparent; border-radius: 10px; }");   
        document.styleSheets[0].insertRule("::-webkit-scrollbar-thumb { height: 5%; background: linear-gradient(#c2e59c, #64b3f4); border-radius: 10px; }");        
    }, []);
    
    return <Main/>;
}


