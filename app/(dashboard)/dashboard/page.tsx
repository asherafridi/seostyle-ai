"use client"
import Breadcrumb from '@/components/Breadcrumb'
import DashboardTopCards from '@/components/DashboardTopCards'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { authOption } from '@/lib/auth'
import { PhoneCall, PhoneMissed, Users, Webhook } from 'lucide-react'
import { getServerSession } from 'next-auth'
import React, { useEffect } from 'react'

const Page = async () => {
  useEffect(()=>{
    console.log('dashboard');
  },[]);
  return (
    <div className='p-5 min-h-screen'>
        <Breadcrumb title="Dashboard" />
        {/* <div className="grid grid-cols-4 mt-10 gap-5">
            <DashboardTopCards icon={<PhoneCall />} title="Total Calls" data="483" span="Dummy Data"/>
            <DashboardTopCards icon={<Webhook />} title="Total Campaigns" data="500" span="Dummy Data"/>
            <DashboardTopCards icon={<PhoneMissed />} title="Rejected Calls" data="230" span="Dummy Data"/>
            <DashboardTopCards icon={<Users />} title="Total Contacts" data="510" span="Dummy Data"/>
        </div> */}
        <div className='flex justify-center p-10'>
        </div>
    </div>
  )
}

export default Page