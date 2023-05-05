import React, { Fragment, useState } from "react";
import * as C from "./style";
import Grid from "../../Grid";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  let generateId = () => {
    return Math.round(Math.random() * 1000);
  };

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a Descrição e o Valor!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser Positivo!");

      return;
    }

    const transaction = {
      id: generateId(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
  };

  return (
    <Fragment>
      <C.Container>
        <C.InputContent>
          <C.Label>Informe a entrada/saída:</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>

        <C.InputContent>
          <C.Label>Qual o valor?</C.Label>
          <C.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          />
        </C.InputContent>
        <C.Info>
          <C.Label>Informe o tipo de operação:</C.Label>
          <C.RadioGroup>
            <C.Input
              type="radio"
              id="entries"
              defaultChecked
              name="group1"
              onChange={() => setExpense(!isExpense)}
            />

            <C.Label htmlFor="entries">Entrada</C.Label>

            <C.Input
              type="radio"
              id="exit"
              name="group1"
              onChange={() => setExpense(!isExpense)}
            />
            <C.Label htmlFor="exit">Saída</C.Label>
          </C.RadioGroup>{" "}
        </C.Info>
        <C.Button onClick={handleSave}>Adicionar</C.Button>
      </C.Container>

      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </Fragment>
  );
};

export default Form;
