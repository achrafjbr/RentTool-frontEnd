import { useState } from "react";
import PingPongIcon from "../../features/auth/components/PingPongIcon";
import TextField from "../../features/auth/components/TextField";
import { Key, Mail } from "lucide-react";
import Divider from "../../components/common/Divider";
import Header from "../../features/auth/components/Header";
import AuthButton from "../../features/auth/components/AuthButton";
import { RoutePath } from "../../routes/routes";
import AuthNavigator from "../../features/auth/components/AuthNavigator";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { login } from "../../features/auth/authThunk";
import type { SignInParams } from "../../features/auth/authTypes";
import type { FailureResponse } from "../../types/failureResoponse";
import toast from "react-hot-toast";
import { setToken } from "../../utilis/tokenService";
import { socket } from "../../config/socket";

export default function SignInPage() {
  const [formData, setFromData] = useState<SignInParams>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.authentication);

  const onsubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const {
        data: { token },
      } = await dispatch(login(formData)).unwrap();
      if (!token) {
        toast.error("Something went wrong");
      }
      toast.success("Account created successfully");
      setToken(token);
      socket.auth = {
        token,
      };
      socket.connect();
      navigate(RoutePath.HOMEPAGE, { replace: true });
    } catch (error) {
      const err = error as FailureResponse;
      toast.error(err.message);
    }
  };

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setFromData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="">
      <div
        className="flex flex-col gap-5 
        justify-center items-center 
        w-[80%] sm:w-[50%] m-auto 
      rounded-2xl border 
      border-gray-100 shadow-2xl 
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
            name="email"
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
            name="password"
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

          <AuthButton
            disabled={isLoading}
            title={isLoading ? "Loading..." : "Se connecter"}
          />
        </form>
        <AuthNavigator
          to={RoutePath.SIGNUPPAGE}
          title="Pas encore de compte ? Rejoignez-nous"
        />
      </div>
    </div>
  );
}
