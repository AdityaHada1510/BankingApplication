export const getAccountDetails = async (accountNum) => {
  const response = await fetch('http://localhost:8080/api/v1/account/' + accountNum);
  const data = await response.json();
  return data
}
export const getBalance = async (accountNum) => {
  const response = await fetch('http://localhost:8080/api/v1/account/balance/' + accountNum);
  try {
    const data = await response.json();
    return data
  } catch (error) {
    return "Invalid Account Number"
  }
  
}
export const updateBalance = async (data) => {
  fetch('http://localhost:8080/api/v1/account/updatebalance/', {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json()).then(data => console.log(data));
}
export const createAccount = async (data) => {
  const response = await fetch("http://localhost:8080/api/v1/account/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    },
    body: JSON.stringify(data)
  })
  const account = await response.json();
  console.log(account);
  return account;
}
export const updateAccount = async (data) => {
  fetch('http://localhost:8080/api/v1/account/',{
    method: "PUT",
    headers: {
      "Content-Type": "application/json", 
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json());

}
export const deleteAccount = async (accountNum) => {
  fetch('http://localhost:8080/api/v1/account/' + accountNum, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json());
}