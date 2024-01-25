import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait2.jpeg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Aoibheann. I live in Vancouver, where I spend my time building things.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hey! I&apos;m Aoibheann and I like building things.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            You know, if you told my younger self that I&apos;d be geeking out over software development, 
            I would&apos;ve laughed but life has a funny way of throwing surprises at you. I started off 
            with a degree in English and History, which I loved. Fast forward a bit, and I found myself
             deep in the world of sales and operations management. It was great, really. I got to meet loads 
             of people, solve problems, and learn a ton about what makes a business tick.
            </p>
            <p>
              But then, something clicked. About 4 years ago I got involved in this project at work, 
              setting up a B2B eccomerce platform, and it was like a whole new world opened up for me.
              My brother (a Full Stack Engineer), seeing me get all excited about tech stuff,
              suggested I try out a computer science course from Harvard(CS50). 
              I thought I&apos;d just be learning a new skill, but it turned out to be a whole lot more.
            </p>
            <p>
              I started exploring more, taking on more software implementation and automation projects 
              at work, and casually continuing my coding education on the side. About a year ago, 
              it became pretty clear to me that coding was what I was passionate about and so 
              I intensified my studying, took more courses and built more projects. I loved the feeling 
              of getting lost in a complex problem or finishing a project and having the rush of knowing 
              that that was something I had created.
            </p>
            <p>
              So, here I am, on this somewhat unconventional path, diving headfirst into software development 
              and loving every bit of it. It&apos;s not just about changing careers; it&apos;s about finding 
              something that excites me every day.
            </p>
            <p>
            I can&apos;t wait to see where this road is taking me and learn what I can build and learn along the way. 
            Let&apos;s see where this adventure goes!
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/aoibheann_fegan" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="https://github.com/Aoibheannfegan" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/aoibheann-fegan-1a8b80127/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:aoibheannfegan04gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              aoibheannfegan04gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
