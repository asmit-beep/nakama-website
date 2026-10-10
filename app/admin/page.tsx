import type {Metadata} from 'next';
import {isAdmin,canPublish} from '@/lib/admin';
import {AdminLogin} from './AdminLogin';
import {AdminDashboard} from './AdminDashboard';
import './admin.css';

export const metadata:Metadata={title:'Admin — Nakama',robots:{index:false,follow:false}};
export const dynamic='force-dynamic';

export default async function AdminPage(){
 const ok=await isAdmin();
 return <div className="adm-root">{ok?<AdminDashboard canPublish={canPublish()}/>:<AdminLogin/>}</div>;
}
