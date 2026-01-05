import clsx from "clsx";
import { NavLink } from "react-router";

function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  to,
  onClick,
  className,
  ...rest
}) {
  const base = "button inline-flex items-center justify-center rounded-full cursor-pointer";
  const variants = {
    primary: "bg-button text-white hover:bg-buttonHover",
    secondary: "border border-solid text-main hover:border-buttonHover bg-white",
  };
  const sizes = {
    sm: "w-[145px] h-[56px]",
    md: "w-[166px] h-[56px]",
    lg: "w-[173px] h-[56px]",
  };

  const classes = clsx(base, variants[variant], sizes[size], className);

  if (to) {
    return (
      <NavLink to={to} className={classes} onClick={onClick} {...rest}>
        {children}
      </NavLink>
    );
  }

  return <button
  type = {type}
  className={classes}
  onClick={onClick}
  {...rest} 
  >{children}</button>;
}

export default Button;
