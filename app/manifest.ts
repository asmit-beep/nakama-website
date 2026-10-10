import type {MetadataRoute} from 'next';
export default function manifest():MetadataRoute.Manifest{
 return {name:'Nakama Growth',short_name:'Nakama',description:'Get your brand named in AI answers.',start_url:'/',display:'browser',background_color:'#0c0b0d',theme_color:'#0c0b0d',
  icons:[{src:'/brand/nakama-favicon.svg',sizes:'any',type:'image/svg+xml'},{src:'/brand/icon-192.png',sizes:'192x192',type:'image/png'},{src:'/brand/icon-512.png',sizes:'512x512',type:'image/png'},{src:'/brand/maskable-512.png',sizes:'512x512',type:'image/png',purpose:'maskable'}]};
}
