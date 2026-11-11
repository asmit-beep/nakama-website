import {minuttiaAlternativesArticle} from './minuttia-alternatives';
import {geoAgenciesArticle} from './geo-agencies';
import {aeoAgenciesArticle} from './aeo-agencies';
import {aeoVsSeoVsGeoArticle} from './aeo-vs-seo-vs-geo';
import {howToRankInChatgptArticle} from './how-to-rank-in-chatgpt';
import {peecAiAlternativesArticle} from './peec-ai-alternatives';
import {profoundAlternativesArticle} from './profound-alternatives';
import {bestGeoAgenciesIndiaArticle} from './best-geo-agencies-india';
import {bestGeoAgenciesForSaasArticle} from './best-geo-agencies-for-saas';
import {geoAuditArticle} from './geo-audit';
import {bestAiVisibilityToolsArticle} from './best-ai-visibility-tools';
import {howToRankInGoogleAiOverviewsArticle} from './how-to-rank-in-google-ai-overviews';
import {answerEngineOptimizationArticle} from './answer-engine-optimization';
import {aiVisibilityReportTemplateArticle} from './ai-visibility-report-template';
import {topicsVsKeywordsArticle} from './topics-vs-keywords';
import {bestAiSeoAgenciesArticle} from './best-ai-seo-agencies';
import {bestAeoAgenciesIndiaArticle} from './best-aeo-agencies-india';
import {bestAeoConsultantsArticle} from './best-aeo-consultants';
import {howToHireAnAeoAgencyArticle} from './how-to-hire-an-aeo-agency';
import {geoAeoPricingArticle} from './geo-aeo-pricing';
import {bestEnterpriseAiSeoAgenciesArticle} from './best-enterprise-ai-seo-agencies';
import {chatgptSeoAgencyArticle} from './chatgpt-seo-agency';
import {geoAgencyVsInHouseArticle} from './geo-agency-vs-in-house';
export type Article={
 slug:string,category:string,title:string,description:string,readTime:string,motif:string,
 sections:{heading:string,paragraphs:string[]}[],
 /** Set only on posts that need a title different from the on-page H1. */
 metaTitle?:string,
 date?:string,
 /** Optional full go-live timestamp (ISO 8601 with offset). Used for og/article published and modified times and the RSS dates when set; otherwise the day in `date` is used. */
 publishedAt?:string,
 /** Optional last-modified timestamp (ISO 8601 with offset). Used for og/article modified time and the default Article dateModified when set; falls back to publishedAt, then date. */
 modifiedAt?:string,
 authorName?:string,
 ogImage?:{url:string,width:number,height:number,alt:string,type?:string},
 /** Replaces the generic Article schema (and the shared breadcrumb schema) when set. */
 jsonLd?:object,
 /** When set, the note renders this HTML instead of the paragraph sections. */
 bodyHtml?:string,
 /** When set, canonical and Open Graph URL use this path. The note still returns 200. */
 canonical?:string,
 /** HTML lead rendered under the dek on section-based notes. */
 pointerHtml?:string,
 /** Preview gate. noindex,follow, and omitted from the sitemap, llms files, RSS and the author index. */
 noindex?:boolean,
 /** When set, the Keep reading card links to this slug instead of the next indexable note. A noindex preview can still show that one card. */
 nextSlug?:string,
 /** Optional. When set, this article's cover shows on the "Keep reading" card of the article that links to it. Decorative: the title beside it names the article, so the image has an empty alt. */
 coverImage?:{src:string,width:number,height:number,alt?:string},
};
export const articles:Article[]=[
 geoAgencyVsInHouseArticle,
 chatgptSeoAgencyArticle,
 profoundAlternativesArticle,
 bestEnterpriseAiSeoAgenciesArticle,
 geoAeoPricingArticle,
 howToHireAnAeoAgencyArticle,
 bestAeoConsultantsArticle,
 bestAeoAgenciesIndiaArticle,
 bestAiSeoAgenciesArticle,
 aiVisibilityReportTemplateArticle,
 minuttiaAlternativesArticle,
 topicsVsKeywordsArticle,
 answerEngineOptimizationArticle,
 bestAiVisibilityToolsArticle,
 howToRankInGoogleAiOverviewsArticle,
 geoAuditArticle,
 bestGeoAgenciesForSaasArticle,
 bestGeoAgenciesIndiaArticle,
 peecAiAlternativesArticle,
 howToRankInChatgptArticle,
 aeoVsSeoVsGeoArticle,
 aeoAgenciesArticle,
 geoAgenciesArticle,
 {slug:'build-around-the-buyers-next-question',category:'Strategy',authorName:'Sandeep Kumar',title:'Build around the buyer\'s next question.',description:'A practical way to turn product expertise into a content plan built around the questions buyers ask next, so AI answers and search results can cite you.',readTime:'4 min read',motif:'question',sections:[
 {heading:'Start with uncertainty.',paragraphs:['A content plan often starts with a list of things a company wants to say. We prefer to begin one step earlier: what is a buyer still trying to understand? That question changes the shape of the work. It gives an article, a comparison or a video a clear reason to exist.','For a software product, the uncertainty might be about accuracy, team adoption, implementation or the effort of switching. A useful plan makes room for those specific concerns instead of treating every reader as if they are ready for a demo.']},
 {heading:'Keep a question log.',paragraphs:['Collect the language people actually use in sales conversations, support requests, public discussions and research sessions. Record the question, the context and what the person was trying to decide. A phrase without its context can easily become the wrong brief.','Then group the questions by the decision they support. “Can it do this?” is different from “Will it work for our team?” and different again from “How do we get started?” Those distinctions help you choose the format and the level of detail.']},
 {heading:'Give each answer a job.',paragraphs:['Before making an asset, write down the question it answers, the evidence it needs and what the reader should understand afterwards. An expert interview may supply the missing context. A walkthrough may show a workflow more clearly than another paragraph. A comparison may need a visible evaluation method.','The aim is not to fit every question into the same template. It is to make the next decision easier. If a piece cannot explain its job in a sentence, the brief probably needs more work.']},
 {heading:'Let the next question shape the next cycle.',paragraphs:['After publishing, return to the question log. Look at the follow-up questions, the points people still misunderstand and the subjects your team keeps explaining. Use that context alongside your visibility observations to decide what comes next.','A strong content plan is a working record of what buyers need to know. It becomes more useful as your understanding improves.']}
 ]},
 {slug:'one-idea-four-ways-to-be-discovered',category:'Editorial',authorName:'Asmit Choudhary',title:'One idea. Four ways to be discovered.',description:'How we adapt one useful point of view across editorial, search, Reddit and other communities, and YouTube, so buyers and AI engines find it wherever they look.',readTime:'4 min read',motif:'distribution',sections:[
 {heading:'Begin with something worth carrying.',paragraphs:['Distribution works best when the underlying idea is clear. Start with a useful observation, an explanation or a practical method your team can support. Make the original asset substantial enough to stand on its own before deciding where else it should appear.','This might be a guide built from product experience, a comparison with a clear method, or an answer to a recurring buyer question. The common thread is a specific audience need and a point of view that earns the time spent reading.']},
 {heading:'Change the expression, keep the meaning.',paragraphs:['For an article, the idea needs structure and enough detail to be useful without a conversation. For search-led content, the question and its answer should be easy to understand. A reader should not have to work through a long introduction to discover whether the page can help.','In a community, begin with the conversation already happening. Offer the relevant part of the idea, respect the rules and be transparent about your connection to the product. A useful contribution should still be useful when the link is removed.']},
 {heading:'Use video to show what words leave out.',paragraphs:['Some ideas become clearer when someone can see the steps. Turn a workflow into a demonstration, use an example to explain a comparison, or let an expert walk through a decision. The script should have its own beginning and resolution.','A video is not an article read aloud. It needs a sequence that helps the viewer understand what is happening, why it matters and what to pay attention to. Shorter adaptations can focus on one complete point from that sequence.']},
 {heading:'Build a small, connected set.',paragraphs:['Keep the original asset and its adaptations in a shared record. Note the audience, the format, the publication location and the question each version answers. This makes the work easier to review and gives the next round of content a stronger starting point.','The result should feel like a coherent body of work: the same expertise, expressed thoughtfully for different moments of discovery.']}
 ]}
];
