import Button from "./components/Button.jsx";
import {useState} from "react";
import React from "react";
function App() {


    const [firstInput, setFirstInput] = useState('');
    const [secondInput, setSecondInput] = useState('');

    const [symbolInput, setSymbolInput] = useState('');

    const [input, setInput] = useState('');
    const [result, setResult] = useState('');


    function handleClick(number){



        let Result ;

        const f_input=+firstInput
        if(number === '%'){
            if (firstInput !== '' && secondInput !== '' && symbolInput !== ''){
                const f_input=+firstInput;
                const s_input=+secondInput;

                if( symbolInput === '/'){
                    Result=f_input / s_input;
                }
                else if( symbolInput === '*'){
                    Result=f_input * s_input;
                }
                else if( symbolInput === '+'){
                    Result=f_input + s_input;
                }
                else if( symbolInput === '-'){
                    Result=f_input - s_input;
                }
                Result = (Result / 100);
                setResult('');
                setResult(prevState => (prevState + Result));

                setFirstInput('');
                setFirstInput(prevState => (prevState + Result));
                setSecondInput('');
                setInput('');
                // setInput(prevState=>(prevState+Result));
                setSymbolInput('');
            }
            else{
                Result = f_input / 100;
                setResult('');
                setResult(prevState => (prevState + Result));

                setFirstInput('');
                setFirstInput(prevState => (prevState + Result));
                setSecondInput('');
                setInput('');
                // setInput(prevState=>(prevState+Result));
                setSymbolInput('');
            }
        }
        if (number==='AC'){
            setFirstInput('');
            setSecondInput('');
            setSymbolInput('');
            setInput('')
            setResult('');
        }
        if (number === '.' ||number === '0' || number === '1' || number === '2' || number === '3' || number === '4' || number === '5' || number === '6' || number === '7' || number === '8' || number === '9' ) {
            if(result !==''){
                setFirstInput('');
                setSecondInput('');
                setSymbolInput('');
                setInput('')
                setResult('');
            }

            if(symbolInput === ''){


                setFirstInput(prevState =>(prevState + number));
                setInput(prevState =>(prevState + number));
            }else{ if(secondInput===''){
                setInput('');
            }
                setSecondInput(prevState =>(prevState + number));
                setInput(prevState =>(prevState + number));

            }
        }

        if(  number === '/' || number === '*' || number === '-' || number === '+'){

            if(firstInput !=='' && secondInput !==''){
                const f_input=+firstInput;
                const s_input=+secondInput;

                let Result;
                if( symbolInput === '/'){
                    Result=f_input / s_input;
                }
                if( symbolInput === '*'){
                    Result=f_input * s_input;
                }
                if( symbolInput === '+'){
                    Result=f_input + s_input;
                }
                if( symbolInput === '-'){
                    Result=f_input - s_input;
                }

                setSymbolInput(number)
                setResult(prevState=>(prevState+Result));

                setFirstInput('');
                setFirstInput(prevState=>(prevState+Result));
                setSecondInput('');
                setInput('')
                setInput(prevState =>(prevState + Result));

            }
            // setInput('');
            setResult('')
            // setSymbolInput(prevState =>(prevState + number));
            setSymbolInput(number);
        }


        if( number === '='){
            const f_input=+firstInput;
            const s_input=+secondInput;

            let Result;

            if( symbolInput === '/'){
                Result=f_input/s_input;
            }
            if( symbolInput === '*'){
                Result=f_input*s_input;
            }
            if( symbolInput === '+'){
                Result=f_input+s_input;
            }
            if( symbolInput === '-'){
                Result=f_input-s_input;
            }

            setResult(prevState=>(prevState+Result));

            setFirstInput('');
            setFirstInput(prevState=>(prevState+Result));
            setSecondInput('');
            setInput('');
            // setInput(prevState=>(prevState+Result));
            setSymbolInput('');
            }
    }


    // let border='border-gray-900';
    let background='bg-slate-700';
    let background1='bg-orange-500';
    let background2='bg-orange-500';
    let Background='bg-gray-200';
    let Background1='bg-gray-500';


    return (
      <>
          <div className={`grid grid-cols-5 mt-36 `}>
              <div></div>
              <div></div>
              <div className={`grid grid-rows-6   rounded-xl  `}>

                  <div className={`grid  p-4 h-20 ${Background1} rounded-t-2xl `}>
                      <h1 className={`text-left text-xl text-white`}>
                          {input}
                      </h1>
                      <p className={`text-right text-xl text-white`}> {(result.length > 0) ? result : symbolInput}</p>
                  </div>

                  {/*<div className={`${Background}`}></div>*/}
                  <div className={`grid grid-cols-4 space-x-2 p-4 ${Background}`}>
                      <div className={`grid col-span-2`}>
                      <Button handleClick={handleClick} bg={background2}>AC</Button>
                      </div>
                      <Button handleClick={handleClick} bg={background2}>%</Button>
                      <Button handleClick={handleClick} bg={background1}>/</Button>
                  </div>
                  <div className={`grid grid-cols-4 p-2 space-x-2 ${Background}`}>
                      <Button handleClick={handleClick} bg={background}>9</Button>
                      <Button handleClick={handleClick} bg={background}>8</Button>
                      <Button handleClick={handleClick} bg={background}>7</Button>
                      <Button handleClick={handleClick} bg={background1}>*</Button>
                  </div>
                  <div className={`grid grid-cols-4 p-2 space-x-2 ${Background}`}>
                      <Button handleClick={handleClick} bg={background}>6</Button>
                      <Button handleClick={handleClick} bg={background}>5</Button>
                      <Button handleClick={handleClick} bg={background}>4</Button>
                      <Button handleClick={handleClick} bg={background1}>-</Button>

                  </div>
                  <div className={`grid grid-cols-4 p-2 space-x-2 ${Background}`}>
                      <Button handleClick={handleClick} bg={background}>3</Button>
                      <Button handleClick={handleClick} bg={background}>2</Button>
                      <Button handleClick={handleClick} bg={background}>1</Button>
                      <Button handleClick={handleClick} bg={background1}>+</Button>

                  </div>
                  <div className={`grid grid-cols-4 p-2 space-x-2 ${Background}`}>
                      <div className={`grid col-span-1`}>
                          <Button handleClick={handleClick} bg={background} >0</Button></div>
                      <Button handleClick={handleClick} bg={background}>.</Button>
                      <Button handleClick={handleClick} bg={background1}>=</Button>


                  </div>

              </div>
              <div></div>
          </div>
      </>
  );
}

          export default App;
