import { Input } from "../ui/input";

interface PitchDeckInputProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PitchDeckInput: React.FC<PitchDeckInputProps> = ({
  placeholder = "Enter your text",
  type = "text",
  value,
  onChange,
}) => {
  return (
    <Input
      className="text-text-primary w-full rounded-[1.6rem] bg-black/15 px-[2.4rem] py-[.8rem] text-[1.6rem] leading-[2.4rem] font-medium outline-0 placeholder:text-[#333333]"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default PitchDeckInput;
