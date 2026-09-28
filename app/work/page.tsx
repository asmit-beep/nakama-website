import type {Metadata} from 'next';
import {Shell,PageIntro,NextChapter} from '../site';
import {WorkPortfolio} from './WorkPortfolio';
export const metadata:Metadata={title:'Client Work — Nakama Growth',description:'Explore Nakama’s documented editorial, search, AI and video portfolio across software and professional training brands.'};
export default function Work(){return <Shell className="work-page shell-cinema"><PageIntro label="Client work" title="Built together." accent="Found in the right places." description="A selection of documented work across AI answers, search, editorial and video. Explore the brand, the buyer question and the context."/><WorkPortfolio/><NextChapter title="Your next chapter could start here."/></Shell>}
