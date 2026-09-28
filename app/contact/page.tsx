import type {Metadata} from 'next';
import {Shell,PageIntro} from '../site';
import {Contact} from '../ContentSections';
export const metadata:Metadata={title:'Contact — Nakama Growth',description:'Tell Nakama what you are building and where you want to be found. Start a conversation about your brand’s next chapter.'};
export default function ContactPage(){return <Shell className="contact-page shell-cinema"><PageIntro label="Start a conversation" title="A shared ambition" accent="starts with hello." description="Tell us what you are building and where you want to be found. We’ll work out a useful next step together."/><Contact/></Shell>}
