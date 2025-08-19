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
      className={`text-text-primary text-[2.2rem] leading-[3.2rem] font-medium ${textColor}`}
    >
      {label}
    </p>
  );
};

export default SectionDescription;
