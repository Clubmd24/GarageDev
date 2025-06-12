import { useState } from 'react';
import { useRouter } from 'next/router';
import { Sidebar } from '../../../components/Sidebar';
import { Header } from '../../../components/Header';
import { Card } from '../../../components/Card';
export default function NewProject(){
  const [f,setF]=useState({name:'',description:''});
  const router=useRouter();
  async function submit(e){
    e.preventDefault();
    const res=await fetch('/api/dev/projects',{method:'POST',
      headers:{'Content-Type':'application/json'},
      credentials:'include',
      body:JSON.stringify(f)
    });
    if(res.ok) router.push('/dev/projects');
  }
  return (
    <div className="flex">
      <Sidebar/><div className="flex-1"><Header/>
      <main className="p-8">
        <h1 className="text-3xl mb-4">New Project</h1>
        <Card><form onSubmit={submit} className="space-y-4">
          <div>…  
      {/* same as above… */}
        </form></Card>
      </main></div>
    </div>
  );
}
