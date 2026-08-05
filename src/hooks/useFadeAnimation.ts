import { useEffect, useState } from "react";

export type FadeAnimationProps = {
  paddingTop: string;
  opacity: string;
};
export const useFadeAnimation = ({
  paddingTop,
  opacity,
}: FadeAnimationProps) => {
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
  }, [paddingTop, opacity]);
  return animation;
};
