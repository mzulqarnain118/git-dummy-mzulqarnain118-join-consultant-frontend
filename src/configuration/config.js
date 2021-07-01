//const environment = "local"; //local,staging,production
export let constant = {
  baseUrl: "https://apidevscoutncellar.influx.co.in",
  username: "appuser@injin.com",
  password: "Test@123",
};

export let setUserName = (username) => {
  constant["username"] = username;
};
export let setPassword = (password) => {
  constant["password"] = password;
};
