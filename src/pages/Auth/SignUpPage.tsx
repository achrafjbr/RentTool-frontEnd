import { Key, Mail, Phone, User2 } from "lucide-react";
import Divider from "../../components/common/Divider";
import AuthButton from "../../features/auth/components/AuthButton";
import AuthNavigator from "../../features/auth/components/AuthNavigator";
import { RoutePath } from "../../routes/routes";
import TextField from "../../features/auth/components/TextField";
import Header from "../../features/auth/components/Header";
import PingPongIcon from "../../features/auth/components/PingPongIcon";
import { useState } from "react";

export default function SignUpPage() {
  const [formData, setFromData] = useState({
    fullName: "",
    phone: "",
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
            label="fullName"
            id="fullName"
            icon=<User2
              className="absolute left-3 text-gray-500 pointer-events-none"
              size={16}
            />
            onChangeHandler={onChangeHandler}
            placeHolder="Jhon Matin"
            type="text"
            value={formData.fullName}
          />
          <Divider padding="pt-2.5" />

          <TextField
            label="phone"
            id="phone"
            icon=<Phone
              className="absolute left-3 text-gray-500 pointer-events-none"
              size={16}
            />
            onChangeHandler={onChangeHandler}
            placeHolder="+212 694 67 31 88"
            type="text"
            value={formData.phone}
          />
          <Divider padding="pt-2.5" />

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

          <AuthButton title="Cree mon compte" />
        </form>

        <AuthNavigator
          to={RoutePath.SIGNINPAGE}
          title="Déjà inscrit ? Connectez-vous"
        />
      </div>
    </div>
  );
}
