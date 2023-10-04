import React, { useState, useRef, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
  faCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Flex } from "@chakra-ui/react";
//↓
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9)(?=.*[!@#$%]).{8,24}$/;

export const Register = (props) => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  //const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  //const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  //const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  //↑
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name] = useState("");

  //↓

  useEffect(() => {
    //userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);
  //↑

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(email);
  //   const member = { userName, password};
  //   console.log(member);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Validate form data
    if (!validName || !validPwd || !validMatch) {
      setErrMsg("入力したユーザ名まだパスワードは使用できません");
      return;
    }

    // Create a member object
    const member = {
      userName: user,
      password: pass
    };

    // Convert the member object to a JSON string
    const memberJSON = JSON.stringify(member);

    // Store the JSON string in a JSON file (you may need to implement this part)
    try {
      // Use an appropriate method to store the JSON string in a file
      // For example, you can use a server API or client-side storage (localStorage, sessionStorage).
      // Here's an example of using localStorage:
      localStorage.setItem("memberData", memberJSON);

      // Set success state
      setSuccess(true);
    } catch (error) {
      console.error("Error storing data:", error);
    }
  };

  return (
    <div className="auth-form-container">
      <h1>登録</h1>

      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
        style={{ color: "red" }}
      >
        {errMsg}
      </p>

      <form className="register-form" onSubmit={handleSubmit}>
        {/* <label htmlFor="name">お名前（フルネーム）</label>
        <input value={name} name="name" id="name" placeholder="Your name" /> */}

        <label htmlFor="username">
          ユーザ名:{" "}
          {/* <span className={validName ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className={validName || !user ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes} />
          </span> */}
        </label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          required
          aria-invalid={validName ? "false" : "true"}
          aria-describedby="uidnote"
          //onFocus={() => setUserFocus(true)}
          //onBlur={() => setUserFocus(false)}
          placeholder="ユーザ名を入力してください"
          style={{ color: "black" }}
        />
        <p
          id="uidnote"
          // className={
          //   userFocus && user && !validName ? "instructions" : "offscreen"
          // }
          style={{ textAlign: "left" }}
        >
          <Flex margin="2">
            <Box padding="1">
              <FontAwesomeIcon icon={faInfoCircle} />
            </Box>
            <Box padding="1">
              4 から 24 文字まで。
              <br />
              文字で始まる必要があります.
              <br />
              文字、数字、アンダースコア、ハイフンが許可されています。
            </Box>
          </Flex>
        </p>
        <label htmlFor="password">パスワードの作成</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="**********"
          id="password"
          name="password"
          style={{ color: "black" }}
        />
        <Flex margin="2">
          <Box padding="1">
            <FontAwesomeIcon icon={faInfoCircle} />
          </Box>
          <Box padding="1" style={{ textAlign: "left" }}>
            8 から 24 文字まで。
            <br />
            子文字、大文字、数字は少なくとも一つずつ必要があります.
            <br />
            特殊文字[!@#$%]は少なくとも一つ必要があります。
          </Box>
        </Flex>

        <label htmlFor="password">パスワードの確認</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="**********"
          id="password"
          name="password"
          style={{ color: "black" }}
        />

        <button className="register-login-btn" type="submit">
          登録
        </button>
      </form>

      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        既にアカウントお待ちの方はここでログイン
      </button>
    </div>
  );
};
