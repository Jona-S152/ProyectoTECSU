import React, { useRef } from 'react';
import Sk from 'skulpt'; // Asegúrate de instalar skulpt como dependencia
import 'skulpt/dist/skulpt.min.js';
import 'skulpt/dist/skulpt-stdlib.js';
import './style.css';

function PythonRunner() {
    const outputRef = useRef(null);
    const codeRef = useRef(null);

    const outf = (text) => {
        outputRef.current.innerHTML += text;
    };

    const builtinRead = (x) => {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles['files'][x] === undefined) {
            throw `File not found: '${x}'`;
        }
        return Sk.builtinFiles['files'][x];
    };

    const runit = () => {
        const prog = codeRef.current.value;
        outputRef.current.innerHTML = '';

        Sk.pre = 'output';
        Sk.configure({ output: outf, read: builtinRead });
        (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'mycanvas';

        const myPromise = Sk.misceval.asyncToPromise(() => {
            return Sk.importMainWithBody('<stdin>', false, prog, true);
        });

        myPromise.then(
            (mod) => {
                console.log('success');
            },
            (err) => {
                console.log(err.toString());
            }
        );
    };

    return (
        <div>
            <form>
        <textarea ref={codeRef} cols="40" rows="10">
        </textarea>
                <br />
                <button type="button" onClick={runit}>Ejecutar</button>
            </form>
            <pre ref={outputRef}></pre>
            <div id="mycanvas"></div>
        </div>
    );
}

export default PythonRunner;
