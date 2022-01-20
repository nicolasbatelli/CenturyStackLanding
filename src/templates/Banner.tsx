import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Stop hasitating and ask for your resources! we have the best pricing offers!"
      subtitle="Start being our partners now!"
      button={
        <Link href="mailto:infocenturystack@gmail.com">
          <a>
            <Button>Talk to us!</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
