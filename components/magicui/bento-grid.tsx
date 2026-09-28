import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 gap-4 md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className?: string;
  background?: ReactNode;
  Icon?: React.ComponentType<{ className?: string; size?: number }>;
  description: string;
  href?: string;
  cta?: string;
}) => (
  <div
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all hover:shadow-lg",
      className
    )}
  >
    {background && <div>{background}</div>}
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300">
      {Icon && (
        <div className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--border)] bg-[var(--surface-hover)] text-[var(--primary)] mb-2">
          <Icon size={20} />
        </div>
      )}
      <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)]">
        {name}
      </h3>
      <p className="max-w-lg text-sm text-[var(--muted)] leading-relaxed">
        {description}
      </p>
    </div>

    {href && cta && (
      <div className="z-10 mt-4 flex items-center gap-2">
        <a
          href={href}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--primary)] hover:underline"
        >
          {cta} &rarr;
        </a>
      </div>
    )}
  </div>
);
