import clsx from "clsx";

interface TypographyH1Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function TypographyH1({
  children,
  className,
  ...props
}: TypographyH1Props) {
  return (
    <h1
      className={clsx(
        "scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
