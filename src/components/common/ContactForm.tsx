import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import ContactFormInput from "./ContactFormInput";
import CommonBtn4 from "./CommonBtn4";
import WaveHand from "./WaveHand";

const ContactForm = () => {
  return (
    <div className="contact-form-bg w-full">
      <h4 className="inline-flex items-center gap-[.5rem] text-[4.8rem] font-semibold tracking-[-0.02em]">
        Hello <WaveHand />
      </h4>

      <form action="" className="flex flex-col gap-[1.8rem]">
        <fieldset className="flex items-center gap-[1.6rem]">
          <Label htmlFor="name" className="min-w-[25rem]">
            My name is
          </Label>

          <ContactFormInput placeholder="Enter your name" type="text" />
        </fieldset>

        <fieldset className="flex items-center gap-[1.6rem]">
          <Label htmlFor="service" className="min-w-[38.9rem]">
            I need a help with
          </Label>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select desired service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </fieldset>

        <fieldset className="flex items-center gap-[1.6rem]">
          <Label htmlFor="email" className="min-w-[35.8rem]">
            Here is my email
          </Label>

          <ContactFormInput
            placeholder="Enter your email address"
            type="email"
          />
        </fieldset>

        <fieldset className="flex items-center gap-[1.6rem]">
          <Label htmlFor="message" className="min-w-[29.7rem]">
            And message
          </Label>

          <Textarea placeholder="Enter your message" />
        </fieldset>

        <div className="mt-[1.5rem] mb-[1rem]">
          <CommonBtn4 label="Submit Request" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
