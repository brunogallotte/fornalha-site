import { twMerge } from "tailwind-merge";
import { Input } from "../ui/input";

export const TextInput = ({ classNames, ...props }: TTextInputProps) => {
  return (
    <div
      className={twMerge("w-full flex flex-col gap-1", classNames?.container)}
    >
      <Input {...props} className={classNames?.input} />
      {props.error && (
        <span className="text-red-300 text-sm">{props.error}</span>
      )}
    </div>
  );
};

type TTextInputProps = React.ComponentProps<"input"> & {
  classNames?: Partial<Record<"container" | "input", string>>;
  error?: string;
};
