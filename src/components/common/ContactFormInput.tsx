import { Input } from "../ui/input";

interface ContactFormInputProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContactFormInput: React.FC<ContactFormInputProps> = ({
  placeholder = "Enter your text",
  type = "text",
  value,
  onChange,
}) => {
  return (
    <Input
      className="text-text-primary w-full border-b border-[#9C9C9C] px-[1rem] py-[.5rem] text-[1.8rem] leading-[2.6rem] font-normal outline-0 placeholder:text-[#9c9c9c]"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default ContactFormInput;
