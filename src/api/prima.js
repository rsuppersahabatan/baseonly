import axios from "axios";

const url =
    process.env.NODE_ENV === "development"
        ? `http://local-version-backend`
        : `https://live-version-backend/`;

// ubah dengan Settingan Sendiri

let token = process.env.REACT_APP_API;

const headers = { Accept: 'application/json', 'Content-Type': 'application/x-www-form-urlencoded', Authorization: `Persahabatan ${token}` };

export default axios.create({
    baseURL: url,
    timeout: 10000,
    headers: headers
});
