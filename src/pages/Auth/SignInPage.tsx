import { useState } from "react";
import PingPongIcon from "../../features/auth/components/PingPongIcon";
import TextField from "../../features/auth/components/TextField";
import { Key, Mail } from "lucide-react";
import Divider from "../../components/common/Divider";
import Header from "../../features/auth/components/Header";
import AuthButton from "../../features/auth/components/AuthButton";
import { RoutePath } from "../../routes/routes";
import AuthNavigator from "../../features/auth/components/AuthNavigator";

export default function SignInPage() {
  const [formData, setFromData] = useState({
    email: "",
    password: "",
  });

  const onsubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    console.log(name, "|", value);
    setFromData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className=" pt-20">
      <div
        className="flex flex-col gap-5 
        justify-center items-center 
        w-[80%] sm:w-[50%] m-auto 
      rounded-2xl border 
      border-gray-100 shadow-xl
       shadow-gray-100/50 p-8 sm:p-10
      "
      >
        <PingPongIcon />
        <Header
          title="Connexion à votre espace"
          subTitle="Retrouvez vos locations d’outils entre particuliers."
        />
        <form className="w-full " onSubmit={(e) => onsubmit(e)}>
          <TextField
            label="EMAIL"
            id="email"
            icon=<Mail
              className="absolute left-3 text-gray-500 pointer-events-none"
              size={16}
            />
            onChangeHandler={onChangeHandler}
            placeHolder="votre@email.com"
            type="email"
            value={formData.email}
          />
          <Divider padding="pt-2.5" />
          <TextField
            label="MOT DE PASSE"
            id="password"
            icon=<Key
              className="absolute left-3 text-gray-500 pointer-events-none"
              size={16}
            />
            onChangeHandler={onChangeHandler}
            placeHolder=". . . . . ."
            type="password"
            value={formData.password}
          />
          <Divider padding="pt-8" />

          <AuthButton title="Se connecter" />
        </form>
        <AuthNavigator
          to={RoutePath.SIGNUPPAGE}
          title="          Pas encore de compte ? Rejoignez-nous"
        />
      </div>
    </div>
  );
}
