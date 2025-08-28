type SectionDescriptionProps = {
  label: string;
  textColor?: string; // Tailwind class
};

const SectionDescription = ({
  label,
  textColor = "text-text-primary",
}: SectionDescriptionProps) => {
  return (
    <p
      className={`text-text-primary text-[1.8rem] leading-[2.8rem] font-medium md:text-[2.2rem] md:leading-[3.2rem] ${textColor}`}
    >
      {label}
    </p>
  );
};

export default SectionDescription;
