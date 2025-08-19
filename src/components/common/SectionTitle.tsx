type SectionTitleProps = {
  label: string;
  textColor?: string; // Tailwind class
};

const SectionTitle = ({
  label,
  textColor = "text-text-primary",
}: SectionTitleProps) => {
  return (
    <h2
      className={`text-[5.6rem] leading-[6.4rem] font-semibold tracking-[-0.02em] ${textColor}`}
    >
      {label}
    </h2>
  );
};

export default SectionTitle;
