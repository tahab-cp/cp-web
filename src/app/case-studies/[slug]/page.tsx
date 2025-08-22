import CaseStudyDetailSection from "@/components/sections/CaseStudyDetailSection";
import ContactSection from "@/components/sections/ContactSection";
import { caseStudiesData } from "@/constants/caseStudiesSection";

interface CaseStudyDetailProps {
  params: Promise<{ slug: string }>; // 👈 params is async
}

const CaseStudyDetailPage = async ({ params }: CaseStudyDetailProps) => {
  const { slug } = await params; // 👈 await params
  const caseStudy = caseStudiesData.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return <h1>Case Study not found</h1>;
  }

  return (
    <main>
      <CaseStudyDetailSection />
      <ContactSection />
    </main>
  );
};

export default CaseStudyDetailPage;
