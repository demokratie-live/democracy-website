import { getFAQ } from "@/lib/content";
import { FAQAccordion } from "./FAQAccordion";

export async function FAQSection() {
  const items = await getFAQ();
  return <FAQAccordion items={items} />;
}
