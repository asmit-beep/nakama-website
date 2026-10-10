import type {MetadataRoute} from 'next';
export default function manifest():MetadataRoute.Manifest{
 return {name:'Nakama Growth',short_name:'Nakama',description:'Get your brand named in AI answers.',start_url:'/',display:'browser',background_color:'#0c0b0d',theme_color:'#0c0b0d',
  icons:[{src:'/brand/nakama-favicon.svg',sizes:'any',type:'image/svg+xml'},{src:'/brand/apple-touch-icon-180.png',sizes:'180x180',type:'image/png'},{src:'/brand/favicon-32.png',sizes:'32x32',type:'image/png'}]};
}
