import { useState } from 'react'
import style from './calculator.module.css'

const Calculator = (props) => {

    // sert a ne pas réper le + - * / (donc eviter les erreurs de frappe)
    const operationEnum = {
        add: '+',
        sub: '-',
        mult: '*',
        div: '/'
    }

    const [nb1, setNb1] = useState(0);
    const [nb2, setNb2] = useState(0);
    const [operation, setOperation] = useState("choose");
    const [result, setResult] = useState(0);


    const handleNumberInput = (e, setStateValue) =>{//on va faire la methode ou l'utilisateur ne devra y mettre que des chiffre!. On peut pas utiliser des proptypes pour ce cas, mais plutot une regex
        const regexNumber = /^[0-9]+([.,][0-9]*)?$/
        //Un nombre ^DOIT 0 a 9 (+)qui peut être répété. (possibilité qu'il yait soit un . soit une virgune et il peut y avoir des chiffre de 0-9 et même plusieurs). $DOIT SE TERMINER
        const value = e.target.value;

        console.log(value);

        if(value === '' || regexNumber.test(value)){
            setStateValue(value.replace(',', '.'));
        }
    }

    const handleCalculeuh = (e) =>{
        e.preventDefault();

        const val1 = parseFloat(nb1);
        const val2 = parseFloat(nb2);

        if(isNaN(val1)||isNaN(val2)){
            setResult('Fool of a Took!')
            return;
        }

        switch (operation) {
            case operationEnum.add:
                setResult(val1+val2)
                break;
            case operationEnum.sub:
                setResult(val1-val2)
                break;
            case operationEnum.div:
                if(val2===0){
                    setResult('Division par zéro? :O');
                }
                else{
                    setResult(val1/val2)
                }
                break;
            case operationEnum.mult:
                setResult(val1*val2)
                break;
            default:
                setResult('Veuillez selectionner une opération')
                break;
        }
    }


    return (
        <div className={style.myForm} onSubmit={handleCalculeuh}>
            <div>
                <form>
                    <div>
                        <label htmlFor="nb1">Nb1</label>
                        <input type="text" id="nb1" className={style.nb1} onChange={(e) => handleNumberInput(e,setNb1)} value={nb1}/>
                    </div>

                    <div>
                        <select id="arithmetic" onChange={(e) => setOperation(e.target.value)} value={operation}> {/* ne pas mettre le onChange dans le optgroup, autrement ça ne fonctionne pas!!!! */}
                            <optgroup>
                                <option value="choose">--Choose one--</option>
                                <option value={operationEnum.add}> + </option>
                                <option value={operationEnum.sub}> - </option>
                                <option value={operationEnum.mult}> X </option>
                                <option value={operationEnum.div}> / </option>
                            </optgroup>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="nb2">Nb2</label>
                        <input type="text" id="nb2" className={style.nb2} onChange={(e) => handleNumberInput(e,setNb2)} value={nb2}/>
                    </div>

                    <div>
                        <input type="submit"  value="Send" />
                        <span> Result: {result}</span>
                    </div>
                    {/* J'ai pas besoin de readOnly dans un span ou div. Il est en lecture seule contrairement a si je met une input */}

                </form>
            </div>
        </div>
    )
}

export default Calculator