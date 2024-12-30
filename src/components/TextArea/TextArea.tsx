import { twMerge } from "tailwind-merge";
import { Textarea } from "../ui/textarea";

export const TextArea = ({ classNames, ...props }: TTextAreaProps) => {
  return (
    <div
      className={twMerge("w-full flex flex-col gap-1", classNames?.container)}
    >
      <Textarea {...props} className={classNames?.input} />
      {props.error && (
        <span className="text-red-300 text-sm">{props.error}</span>
      )}
    </div>
  );
};

type TTextAreaProps = React.ComponentProps<"textarea"> & {
  classNames?: Partial<Record<"container" | "input", string>>;
  error?: string;
};
