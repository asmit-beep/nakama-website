import type {Metadata} from 'next';
import {Shell,PageIntro,NextChapter} from '../site';
import {JournalIndex} from './JournalIndex';
export const metadata:Metadata={title:'Journal — Nakama Growth',description:'Field notes on buyer questions, useful content, thoughtful distribution and measuring earned visibility.'};
export default function Journal(){return <Shell className="journal-page shell-cinema"><PageIntro label="The Nakama journal" title="Ideas worth" accent="spending time with." description="Field notes from the work. On useful content, considered distribution and building a brand worth finding."/><JournalIndex/><NextChapter title="A question worth exploring?" text="Bring us the context. Let’s think it through together."/></Shell>}
