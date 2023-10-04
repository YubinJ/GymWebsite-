import { Button, Heading } from "@chakra-ui/react";
import { useAuth } from "../AuthContext";
import ClassMamagenent from "../components/ClassManagement";

export const Mypage = (props) => {
  const { setLoggedin } = useAuth();

  const handleClick = (e) => {
    setLoggedin(false);
    localStorage.setItem("loggedin", "false");
    console.log("Logged out");
    console.log("Login status: " + localStorage.getItem("loggedin"));
  };

  return (
    <div>
      <Heading my="30px" p="2px">
        My page
      </Heading>
      <ClassMamagenent />
      <Button className="register-login-btn" onClick={handleClick}>
        ログアウト
      </Button>
    </div>
  );
};
