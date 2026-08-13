import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export type FadeAnimationProps = {
  paddingTop: string;
  opacity: string;
};
export const useFadeAnimation = ({
  paddingTop,
  opacity,
}: FadeAnimationProps) => {
  const location = useLocation();

  const [animation, setAnimation] = useState({
    paddingTop: paddingTop,
    opacity: opacity,
  });

  useEffect(() => {
    console.log("animation");
    const timer = setTimeout(() => {
      setAnimation({
        paddingTop: "pt-20",
        opacity: "opacity-100",
      });
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [paddingTop, opacity, location.pathname]);
  return animation;
};
