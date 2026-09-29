import type {Metadata} from 'next';
import {Shell,BOOKING} from './site';
import {HeroRuntime} from './HeroRuntime';
import {FeaturesSection} from '@/components/cardboard-features/FeaturesSection';
import {Presence,HomeProof,HomeFaqLite,HomeContact} from './HomeSections';
import {PromptDirector} from '@/components/prompt-director';
import {SequenceShowcase} from '@/components/sequence';

export const metadata:Metadata={
 title:'Nakama Growth — Be the brand they already know.',
 description:'A companion for earned growth. Nakama helps your brand get found, trusted and chosen across AI, search, editorial, communities and video.',
};

export default function Home(){
 return (
  <Shell className="home-page home-cinema">
   <HeroRuntime booking={BOOKING}/>
   <FeaturesSection/>
   <Presence/>
   <PromptDirector/>
   <SequenceShowcase/>
   <HomeProof/>
   <HomeFaqLite/>
   <HomeContact/>
  </Shell>
 );
}
