import { useState } from 'react'
import './App.css'

interface FieldProps {
  label: string
  placeholder: string
  onEnter: () => void
  onChange: (v: string) => void
}

function Field(props: FieldProps) {
  const KeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      props.onEnter()
      e.currentTarget.value = ""
    }
  }

  return (

    <div className="mt-2">
      <div>
      <label>{props.label}</label>
      </div>
      <input
        type="number"
        className="bg-gray-900 rounded p-2"
        placeholder={props.placeholder}
        onKeyDown={KeyDown}
        onChange={(e) => props.onChange(e.target.value)}
      />
      </div>
      )
}

export function App(){
  const [value, setValue] = useState<number>()
  const [result, setResult] = useState<string>("")
  const [sum, setSum] = useState<number> (0)

  const calc = () => {
    if ( value ) {
      const NextSum = sum + value
      setSum(NextSum)

      setResult(
        result 
        ? `${result} + ${value}`
        : `A soma é ${value}`
      )
      setValue(undefined)
    }
  };
  
  return (
    <div className="bg-gray-950 flex text-white flex-col justify-center items-center w-[100vw] h-[100vh] p-4">
      <h1 className="text-center w-full font-bold">SOMATORIA</h1>

      <div className="calc-container bg-gray-900 mt-4 p-2 rounded">
        <Field
          label="Valor: "
          placeholder="insira um valor"
          onChange={(x) => setValue(Number(x))}
          onEnter={calc}
        />

        <button className="bg-gray-750 mt-4 p-2 rounded" onClick={calc}>
          Adicionar
        </button>

        {!!result && <h2>{result} = {sum}</h2>}
      </div>
    </div>
  );

}

export default App
 