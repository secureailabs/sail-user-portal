type TButton = {
  children: string | React.ReactNode;
  button_type: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  full: boolean;
  height?: '3.6rem' | '5rem';
  padded?: boolean;
};

export default TButton;
