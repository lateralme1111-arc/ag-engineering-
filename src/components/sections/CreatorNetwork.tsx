import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Card, CardContent } from '../ui/Card';
import { Marquee3D } from '../ui/3d-testimonials';

const testimonials = [
  {
    name: 'Ava Green',
    username: '@ava',
    body: 'ADs Engineering transformed our ad performance overnight!',
    img: 'https://randomuser.me/api/portraits/women/32.jpg',
    country: '🇦🇺 Australia',
  },
  {
    name: 'Ana Miller',
    username: '@ana',
    body: 'Our ROAS jumped 4x after switching to their creatives.',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    country: '🇩🇪 Germany',
  },
  {
    name: 'Mateo Rossi',
    username: '@mat',
    body: 'The creative velocity is unmatched — 50 hooks tested weekly!',
    img: 'https://randomuser.me/api/portraits/men/51.jpg',
    country: '🇮🇹 Italy',
  },
  {
    name: 'Maya Patel',
    username: '@maya',
    body: 'Data-driven creatives that actually scale. Highly recommend.',
    img: 'https://randomuser.me/api/portraits/women/53.jpg',
    country: '🇮🇳 India',
  },
  {
    name: 'Noah Smith',
    username: '@noah',
    body: 'Best ad agency we have ever worked with. Period.',
    img: 'https://randomuser.me/api/portraits/men/33.jpg',
    country: '🇺🇸 USA',
  },
  {
    name: 'Lucas Stone',
    username: '@luc',
    body: 'Smooth onboarding and incredible creative output.',
    img: 'https://randomuser.me/api/portraits/men/22.jpg',
    country: '🇫🇷 France',
  },
  {
    name: 'Haruto Sato',
    username: '@haru',
    body: 'Our mobile ad CTR tripled within a month.',
    img: 'https://randomuser.me/api/portraits/men/85.jpg',
    country: '🇯🇵 Japan',
  },
  {
    name: 'Emma Lee',
    username: '@emma',
    body: 'They understand ecommerce performance like no one else.',
    img: 'https://randomuser.me/api/portraits/women/45.jpg',
    country: '🇨🇦 Canada',
  },
  {
    name: 'Carlos Ray',
    username: '@carl',
    body: 'High-quality UGC and static ads on tap. Game changer.',
    img: 'https://randomuser.me/api/portraits/men/61.jpg',
    country: '🇪🇸 Spain',
  },
];

interface TestimonialCardProps {
  img: string;
  name: string;
  username: string;
  body: string;
  country: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ img, name, username, body, country }) => {
  return (
    <Card className="w-56 bg-white/[0.03] border-white/[0.08] text-white shadow-none hover:bg-white/[0.06] transition-colors">
      <CardContent className="p-4">
        <div className="flex items-center gap-2.5">
          <Avatar className="size-9">
            <AvatarImage src={img} alt={name} loading="lazy" decoding="async" />
            <AvatarFallback className="bg-accent-dark text-white/60">{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-white flex items-center gap-1">
              {name} <span className="text-xs text-white/40">{country}</span>
            </figcaption>
            <p className="text-xs font-medium text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-3 text-sm text-white/60">{body}</blockquote>
      </CardContent>
    </Card>
  );
}

export default function CreatorNetwork() {
  return (
    <section id="network" className="py-24 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-8 lg:px-16 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <div className="font-mono text-[10px] text-accent-mint uppercase tracking-[0.3em] mb-6">
              Client Stories // Worldwide
            </div>
            <h2 className="text-7xl md:text-9xl font-display font-bold uppercase tracking-tighter leading-[0.8]">
              The <span className="text-accent-mint">Registry</span>
            </h2>
          </div>
          <div className="font-mono text-[10px] text-white/20 uppercase tracking-widest mb-4">
            Trusted by 500+ brands globally
          </div>
        </div>
      </div>

      {/* 3D Testimonials Marquee */}
      <div className="relative flex w-full items-center justify-center overflow-hidden">
        <div className="border border-white/[0.06] rounded-lg relative flex h-[500px] w-full max-w-[1200px] flex-row items-center justify-center overflow-hidden gap-1.5 [perspective:300px]">
          <div
            className="flex flex-row items-center gap-4"
            style={{
              transform:
                'translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)',
              willChange: 'transform',
            }}
          >
            <Marquee3D vertical pauseOnHover repeat={3} className="[--duration:40s]">
              {testimonials.map((review) => (
                <TestimonialCard key={review.username} img={review.img} name={review.name} username={review.username} body={review.body} country={review.country} />
              ))}
            </Marquee3D>
            <Marquee3D vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
              {testimonials.map((review) => (
                <TestimonialCard key={review.username} img={review.img} name={review.name} username={review.username} body={review.body} country={review.country} />
              ))}
            </Marquee3D>
            <Marquee3D vertical pauseOnHover repeat={3} className="[--duration:40s]">
              {testimonials.map((review) => (
                <TestimonialCard key={review.username} img={review.img} name={review.name} username={review.username} body={review.body} country={review.country} />
              ))}
            </Marquee3D>
            <Marquee3D vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
              {testimonials.map((review) => (
                <TestimonialCard key={review.username} img={review.img} name={review.name} username={review.username} body={review.body} country={review.country} />
              ))}
            </Marquee3D>
            {/* Gradient overlays */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
