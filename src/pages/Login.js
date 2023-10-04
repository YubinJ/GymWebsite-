import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import axios from "axios";

export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loggedin, setLoggedin } = useAuth();
  const [currentMember, setCurrentMember] = useState(null);

  //ログインボタンを押したら
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user: " + username);
    console.log("login status: " + loggedin);

    async function fetchData() {
      try {
        const response = await axios.get(
          "https://vkfscl-4001.csb.app/memberRegister",
        );
        console.log("Data retrieved:", response.data);

        for (const member of response.data) {
          if (member.user === username && member.pass === password) {
            setLoggedin(true);
            localStorage.setItem("loggedin", "true");
            setCurrentMember(member);
            console.log("login status: " + loggedin);
            break;
          }
        }
      } catch (error) {
        console.error("Error retrieving data:", error);
      }
    }
    fetchData();
  };

  return (
    <div className="auth-form-container">
      <h2>ログイン</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="text">ユーザ名</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="ユーザ名"
          id="username"
          name="username"
          style={{ color: "black" }}
        />

        <label htmlFor="password">パスワード</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="**********"
          id="password"
          name="password"
          style={{ color: "black" }}
        />

        <button className="register-login-btn" type="submit">
          ログイン
        </button>
      </form>

      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        アカウントを持ちのない方はここで登録
      </button>
    </div>
  );
};
