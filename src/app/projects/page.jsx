import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import adoptly from '@/images/projects/adoptly.png'
import ebay from '@/images/projects/ebay.png'
import email from '@/images/projects/email.png'
import pacificpaws from '@/images/projects/pacificpaws.png'
import twitter from '@/images/projects/twitter.png'
import wedding from '@/images/projects/wedding.png'
import wiki from '@/images/projects/wiki.png'
import SplitWiser from '@/images/projects/SplitWiser.png'


const projects = [
  {
    name: 'SplitWiser',
    description:
      'An Django app to make sharing expenses easier. Login with username:TestUser password:TestAccount',
    link: { href: 'https://web-production-f501.up.railway.app/', label: 'Visit App' },
    logo: SplitWiser,
  },
  {
    name: 'Adoptly',
    description:
      'A pet adoption built with Vanilla JS. Integrates with the Pet Finder api to show you pets in your area.',
    link: { href: 'https://aoibheannfegan.github.io/Adoptly/', label: 'Visit App' },
    logo: adoptly,
  },
  {
    name: 'Wedding Photographer Website and CRM',
    description:
      'A client facing wedding photographer website and a custom built in CRM.',
    link: { href: 'https://web-production-5452.up.railway.app/', label: 'Visit App' },
    logo: wedding,
  },
  {
    name: 'My Ebay',
    description:
      'An Ebay style store built with Django. Create new listings, bid and add items to your watchlist.',
    link: { href: 'https://web-production-4335.up.railway.app/', label: 'Visit App' },
    logo: ebay,
  },
  {
    name: 'My Twitter',
    description:
      'A twitter style app which allows users to register, post and follow others.',
    link: { href: 'https://web-production-a3cb.up.railway.app/', label: 'Visit App' },
    logo: twitter,
  },
  {
    name: 'My Email',
    description:
      'An email app built with Django which allows users to sign up, send emails to other users, reply to emails, archive and view sent',
    link: { href: 'https://web-production-cd6d.up.railway.app', label: 'Visit App' },
    logo: email,
  },
  {
    name: 'My Wiki',
    description:
      'A wikipedia style site built with Django. Search existing articles, add your own or edit existing articles.',
    link: { href: 'https://web-production-2a6e.up.railway.app/', label: 'Visit Site' },
    logo: wiki,
  },
  {
    name: 'Pacific Paws',
    description:
      'A website built with react for a friend working on becoming a full time dog groomer.',
    link: { href: 'https://walrus-app-u35zn.ondigitalocean.app/', label: 'Visit App' },
    logo: pacificpaws,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve made trying to put my dent in the universe."
      intro="Here is a small collection of projects I've worked on. I've included a link to the hosted site and the source code can be found for all of these projects on my github.
      I'm constantly tinkering on various projects so check out my Github or LinkedIn to see what I'm up to."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-30 w-30 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-30 w-25"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
