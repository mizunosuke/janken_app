import { useInView } from "react-intersection-observer";

export const FadeInContents = ({
  children,
  rootMargin = "100px",
  animation,
  triggerOnce = false,
  className,
  startClass = "",
  style
}) => {
  const { ref, inView } = useInView({
    rootMargin: rootMargin,
    triggerOnce: triggerOnce
  });
  return (
    <div ref={ref} className={className} style={style}>
      <div className={inView ? animation : startClass}>{children}</div>
    </div>
  );
};