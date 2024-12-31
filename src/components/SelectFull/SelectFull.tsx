import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const SelectFull = (props: TSelectFullProps) => {
  return (
    <Select onValueChange={(value) => props.onValueChange(props.name, value)}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={props.placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{props.label}</SelectLabel>
          {props.options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

type TSelectFullProps = {
  name: string;
  label: string;
  placeholder: string;
  options: {
    label: string;
    value: string;
  }[];
  onValueChange: (name: any, value: string) => void;
};
