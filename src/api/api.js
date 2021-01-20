export const API_URL = 'http://localhost:10003/json' // local_api
// export const API_URL = 'https://dogsapi.origamid.dev/json' // online_api

export const TOKEN_POST = (body) => {
  return {
    url: API_URL + '/jwt-auth/v1/token/',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export const TOKEN_VALIDATE = (token) => {
  return {
    url: API_URL + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  }
}

export const GET_USER = (token) => {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  }
}
