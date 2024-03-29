import { HeroPattern } from '@/components/HeroPattern'
import { Navigation } from '@/components/Navigation'
import { Feedback } from '@/components/Feedback'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Local Election Results Validation',
  description: 'Learn how to validate the election results at a local level using our platform.',
}

export const sections = [
  { title: 'Hero', id: 'hero' },
  { title: 'Navigation', id: 'navigation' },
  { title: 'Feedback', id: 'feedback' },
  { title: 'Footer', id: 'footer' },
]

<HeroPattern />

# Local Election Results Validation

Use our platform to validate the election results at a local level. This ensures the integrity and transparency of the election process. {{ className: 'lead' }}

<div className="not-prose mb-16 mt-6 flex gap-3">
  <Button href="/quickstart" arrow="right">
    <>Quickstart</>
  </Button>
  <Button href="/resources" variant="outline">
    <>Explore Resources</>
  </Button>
</div>

## Getting started {{ anchor: false }}

To get started, create a new account in your [user settings](#), then learn about how you can validate the election results using our platform. When you are ready to go live, publish your findings to our [community forum](#) to engage with the community. {{ className: 'lead' }}

<div className="not-prose">
  <Button href="/resources" variant="text" arrow="right">
    <>Get Started</>
  </Button>
</div>

<Navigation />

<Feedback />

<Footer />