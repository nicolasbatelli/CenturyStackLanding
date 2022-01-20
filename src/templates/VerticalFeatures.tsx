import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="What we offer?"
    description="Century Stack offers high quality resources to ensure compliance with the client requirements."
  >
    <VerticalFeatureRow
      title="About the resources"
      description="We hire the best developer resources to ensure the best quality to our clients, through a rigorous series of interviews, we select the best profile for the requiered business."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Business Growing"
      description="Through our best professional, we ensure the grow and stabilization of your company and business."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Our works"
      description="We have develop a huge amount of solutions in different technologies, such as .Net, Node.js, React, Angular. Also using cloud solutions like AWS and Azure. "
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
