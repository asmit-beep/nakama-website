import type {Metadata} from 'next';
import {Shell,Logo,BOOKING,NextChapter} from './site';
import {HeroRuntime} from './HeroRuntime';
import {FeaturesSection} from '@/components/cardboard-features/FeaturesSection';
import {Presence,HomeProof,HomeFaqLite} from './HomeSections';
import {PromptDirector} from '@/components/prompt-director';
import {SequenceShowcase} from '@/components/sequence';

export const metadata:Metadata={
 title:'Nakama Growth — Be the brand they already know.',
 description:'A companion for earned growth. Nakama helps your brand get found, trusted and chosen across AI, search, editorial, communities and video.',
};

export default function Home(){
 return (
  <Shell className="home-page home-cinema">
   <HeroRuntime logo={<Logo/>} booking={BOOKING}/>
   <FeaturesSection/>
   <Presence/>
   <PromptDirector/>
   <SequenceShowcase/>
   <HomeProof/>
   <HomeFaqLite/>
   <NextChapter title="Let’s build your next chapter." text="A shared ambition. A good conversation. A place to start."/>
  </Shell>
 );
}