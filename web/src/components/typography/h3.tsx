import clsx from "clsx";

interface TypographyH3Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function TypographyH3({
  children,
  className,
  ...props
}: TypographyH3Props) {
  return (
    <h3
      className={clsx(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}
