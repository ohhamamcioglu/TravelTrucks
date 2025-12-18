import clsx from "clsx";

function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  href,
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

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
        {children}
      </a>
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
