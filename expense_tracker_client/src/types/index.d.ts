declare module "js-cookie";

interface Obj {
  [key: string]: any;
}

interface inputField {
  title?: string;
  className?: string;
  validation?: Obj;
  name: string;
  icon?: React.ReactNode;
  placeholder?: string;
  eyeIcon?: boolean;
  type?: "number" | "text" | "password" | "email";
}
