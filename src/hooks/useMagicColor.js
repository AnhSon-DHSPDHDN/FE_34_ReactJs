import { useEffect, useState } from "react";

const listColorHasUse = ["black", "yellow", "blue", "red", "green"];

export const useMagicColor = () => {
  const [color, setColor] = useState("black");

  const updateMagicColor = () => {
    const randomIndex = Math.floor(Math.random() * listColorHasUse.length);
    setColor(listColorHasUse[randomIndex]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      updateMagicColor();
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return color;
};
