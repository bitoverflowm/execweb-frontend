
import React from 'react';

import SponsorshipRequests from '../components/SponsorshipRequests';


const AdminDashboard = () => {    
    const DUMMY_SPONSOR_SUBMISSION = [
        {
        'id' : 's1',
        'sponsor_name': 'Sterling Archer',
        'sponsor_business' : 'Bobs Burger',
        'avatar' : 'https://pbs.twimg.com/profile_images/473693408649674753/Fjo74UD2.png',        
        't_job_titles' : ['j1', 'j2'],
        'title' : 'Explorations into Cyber Espionage',
        't_industry' : ['i1', 'i2'],
        't_client_list' : 'test.csv',
        't_employee_count': 50,
        't_users': ['u1', 'u3'],
        'date_start': 'Feb 1st 2021',
        'date_end' : 'Feb 1st 2021',
        't_topic' : 0,
        't_host' : 0,
        }
    ];
    return <SponsorshipRequests sponsorshipRequests={DUMMY_SPONSOR_SUBMISSION} />
};

export default AdminDashboard;