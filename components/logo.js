import { useTheme } from '@mui/material/styles';
import Image from "next/image";

export const Logo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return (
    <Image
      src="/yoca.png"
      priority
      alt="Logo"
      className="h-10 w-10 rounded-full"
      width={60}
      height={60}
    />
  );
};
