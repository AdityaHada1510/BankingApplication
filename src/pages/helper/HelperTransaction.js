export const getMiniStatement = async (accountNum) =>{
  const response = await fetch('http://localhost:8080/api/v1/transaction/ministatement/' + accountNum);
try {
  const data = await response.json();
  return data
} catch (error) {
  return "Invalid Account Number"
}
}

export const getCustomStatement = async (data) => {
  const response = await fetch("http://localhost:8080/api/v1/transaction/customstatement/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    },
    body: JSON.stringify(data)
  })
  const statement = await response.json();
  console.log(statement);
  return statement;
}

export const addTransaction = async (data) =>{
  const response = await fetch("http://localhost:8080/api/v1/transaction/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    },
    body: JSON.stringify(data)
  })
  const transaction = await response.json();
  console.log(transaction);
  return transaction;
}