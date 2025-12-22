import { cn } from "~/lib/utils";
import AwardBanner from "@/public/award-banner.svg";

export function AwardBody({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("relative flex justify-center", className)}>
      <AwardBanner className="h-64 w-auto text-blue-400" />
      <div className="absolute inset-0 flex flex-col items-center gap-4 mt-6 mb-10">
        {children}
      </div>
    </div>
  );
}

export function AwardEventLogo({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-[80%] text-center text-lg leading-tight font-semibold text-white -mb-2",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function AwardEventName({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "max-w-[85%] text-center text-lg leading-tight font-semibold text-white",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function AwardTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "max-w-[85%] text-center text-xl leading-tight font-bold text-yellow-400 my-auto",
        className,
      )}
    >
      {children}
    </h2>
  );
}
