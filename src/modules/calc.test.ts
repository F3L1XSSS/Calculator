import { debug } from "console";
import Calc, { CalcInput, InputType, Operation, OperatorType } from "./calc";

test ('derive state', () => {
    const inputs: Array<CalcInput> = [
      {type: InputType.Numerical, value: 1},        
      {type: InputType.Numerical, value: 2},        
      {type: InputType.Operator, operator: OperatorType.Add},        
      {type: InputType.Numerical, value: 3},
      {type: InputType.Operator, operator: OperatorType.Equals},        
    ];

    const operations: Array<Operation> = [
        { operator: OperatorType.Add, value: 12 },
        { operator: OperatorType.Add, value: 3 },
        { operator: OperatorType.Equals, value: 0 },
    ];

    expect(Calc.getOperationsBuilder(inputs).operations).toEqual(operations);
});

test('derives displayValue upon new numerical input', () => {
    const inputs: Array<CalcInput> = [];

    const state = Calc.getState(inputs);
    expect (state.displayValue).toEqual(0);
});

test('derives displayValue upon first numerical input', () => {
    const inputs: Array<CalcInput> = [
      {type: InputType.Numerical, value: 1},        
    ];

const state = Calc.getState(inputs);
expect(state.displayValue).toEqual(1)
});

test('derives displayValue upon new numerical input', () => {
  const inputs: Array<CalcInput> = [
    {type: InputType.Numerical, value: 1},        
    {type: InputType.Numerical, value: 2},        
    {type: InputType.Operator, operator: OperatorType.Add},        
    {type: InputType.Numerical, value: 3},
    {type: InputType.Operator, operator: OperatorType.Equals},
  ];

const state = Calc.getState(inputs);
expect(state.displayValue).toEqual(3)
});



