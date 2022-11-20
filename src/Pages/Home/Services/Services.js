import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices, isLoading] = useState([]);
    const [visible, setVisible] = useState(3);

    const ShowMoreItems = () => {
        setVisible((prevValue) => prevValue + 3)
    }

    useEffect(() => {
        fetch('https://y-six-phi.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    if (isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-sky-500">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p>Here our some services. We are provide many types of Services.</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.slice(0, visible).map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
                <button className='btn btn-info' onClick={ShowMoreItems}>See All</button>
            </div>
        </div>
    );
};



export default Services;