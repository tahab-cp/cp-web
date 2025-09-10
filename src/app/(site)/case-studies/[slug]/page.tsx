import CaseStudyDetailSection from "@/components/sections/CaseStudyDetailSection";
import ContactSection from "@/components/sections/ContactSection";
import { caseStudiesCardData } from "@/constants/globals";

interface CaseStudyDetailProps {
  params: Promise<{ slug: string }>; // 👈 params is async
}

const CaseStudyDetailPage = async ({ params }: CaseStudyDetailProps) => {
  const { slug } = await params; // 👈 await params
  const caseStudy = caseStudiesCardData.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return <h1>Case Study not found</h1>;
  }

  return (
    <>
      <CaseStudyDetailSection />
      <ContactSection />
    </>
  );
};

export default CaseStudyDetailPage;
