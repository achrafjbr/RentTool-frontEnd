// import { useEffect } from "react";
// import { getToken } from "../utilis/tokenService";
// import { useAppDispatch } from "./reduxHooks";
// import { me } from "../features/auth/authThunk";
// import { socket } from "../config/socket";
// import { RoutePath } from "../routes/routes";
// const dispatch = useAppDispatch();
// export const useNavigate = () => {
//   const navigate = useNavigate();
//   useEffect(() => {
//     const token = getToken();
//     if (token) {
//       dispatch(me());
//       socket.auth = {
//         token,
//       };
//       socket.connect();
//       // navigation to home
//     } else {
//       navigate(RoutePath.SIGNINPAGE);
//     }
//   }, []);
// };

import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

export const useNavigation = ({
  to,
  options,
}: {
  to: string;
  options?: { replace: false };
}) => {
  navigate(to, options);
};
