export const getLoggedInUser = () => {
  const user = localStorage.getItem('user');
  return user;
}
export const addUser = async (data) => {
  const response = await fetch("http://localhost:8080/api/v1/customer/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    },
    body: JSON.stringify(data)
  })
  const user = await response.json();
  return user;
}


export const getUser = async (customerID) => {
  console.log(customerID);
  const response = await fetch('http://localhost:8080/api/v1/customer/' + customerID);
  const data = await response.json();
  return data
}
export const updateUser = async (data) => {
  console.log(data);
  fetch('http://localhost:8080/api/v1/customer/', {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json());
}
export const deleteUser = async (customerID) => {
  fetch('http://localhost:8080/api/v1/customer/' + customerID, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    }
  })
    .then(res => res.json());
}

export const changePassword = async (data) => {
  fetch('http://localhost:8080/api/v1/user/password',{
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
export const loginUser = async (data) => {
  var requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    },
    body: JSON.stringify(data),
  };

  const response = await fetch("http://localhost:8080/api/v1/user/login", requestOptions)
  try {
    const user = await response.json();
    console.log(user);
    return user;
  } catch (error) {
    return null;
  }
}
export const getPassword = async(userId) =>{
  const response = await fetch('http://localhost:8080/api/v1/user/password/' + userId);
  const password = await response.text();
  return password;
}