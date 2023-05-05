import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 20px auto;
  align-items: center;
  background-color: white;
  color: #5f6368;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
  gap: 10px;

  @media (max-width: 750px) {
    display: grid;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: 700;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #ccc;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-left: 20px;
    margin-top: 0;
    margin-right: 5px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  padding: 5px 20px;
  border-radius: 5px;
  font-weight: 700;
  font-size: 1rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  border: none;
  cursor: pointer;
  color: white;
  background-color: #007acc;
`;
