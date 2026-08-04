import { Key, Mail, Phone, User2 } from "lucide-react";
import Divider from "../../components/common/Divider";
import AuthButton from "../../features/auth/components/AuthButton";
import AuthNavigator from "../../features/auth/components/AuthNavigator";
import { RoutePath } from "../../routes/routes";
import TextField from "../../features/auth/components/TextField";
import Header from "../../features/auth/components/Header";
import PingPongIcon from "../../features/auth/components/PingPongIcon";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { register } from "../../features/auth/authThunk";
import toast from "react-hot-toast";
import type { FailureResponse } from "../../types/failureResoponse";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formData, setFromData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
  });

  const { isLoading } = useAppSelector((state) => state.authentication);

  const onsubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await dispatch(register({ ...formData })).unwrap();
      console.log("response", response);
      toast.success("Account created successfully");
      navigate(RoutePath.SIGNINPAGE);
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
    <div className=" ">
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
          title="Rejoindre ToolRent"
          subTitle="Louez des outils professionnels ou 
          gagnez de l’argent en louant les vôtres."
        />
        <form className="w-full " onSubmit={(e) => onsubmit(e)}>
          <TextField
            name="fullName"
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
            name="phone"
            label="phone"
            id="phone"
            icon=<Phone
              className="absolute left-3 text-gray-500 pointer-events-none"
              size={16}
            />
            onChangeHandler={onChangeHandler}
            placeHolder="+212 694 67 31 88"
            type="tel"
            value={formData.phone}
          />
          <Divider padding="pt-2.5" />

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
            title={isLoading ? "loading..." : "Cree mon compte"}
          />
        </form>

        <AuthNavigator
          to={RoutePath.SIGNINPAGE}
          title="Déjà inscrit ? Connectez-vous"
        />
      </div>
    </div>
  );
}
