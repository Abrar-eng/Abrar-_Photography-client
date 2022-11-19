import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AddServices = () => {
   
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/services'



   const handleAddNewService=event=>{
    event.preventDefault();
    
    const form=event.target;
    const service_id =form.service_id.value;
    const service_name=form.service_name.value;
    const img=form.img.value;
    const price=form.price.value;
    const description=form.description.value;
 const service={
    service_id,
    service_name,
    img,
    price,
    description
 }

    fetch('https://y-six-phi.vercel.app/services', {
          method:'POST',
          headers: {
             'content-type': 'application/json'
          },
          body: JSON.stringify(service)
       })
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
            if(data.acknowledged){
             alert('Review Placed Successfully')
             form.reset();
           } 
        })
        .catch(err => console.error(err));
        navigate(from, { replace: true })
    }  

   
   
    return (
        <div>
            <div className='bg-green-300 m-6 rounded-lg'>
         <h1 className='text-3xl text-center mt-10 p-3 font-bold text-indigo-700'>Please Add Your New Services.</h1> 
                   
                        <div className='flex justify-center'>
                          
                            <form onSubmit={handleAddNewService}>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                    <input name="service_id" type="text" placeholder="service_id" className="input input-ghost w-full input-bordered" />
                                    <input name="service_name" type="text" placeholder="Service name.." className="input input-ghost w-full input-bordered" />
                                    <input name="img" type="text" placeholder="img Url"  className="input input-ghost w-full input-bordered"  />
                                    <input name="price" type="text" placeholder="price"  className="input input-ghost w-full input-bordered"  />
                                    <textarea name="description" type="text" placeholder="description"  className="input input-ghost w-full input-bordered"  />
                                   
                    
                                </div>
                                   
                                <button className='btn mb-4 mt-2' type="submit">Add New Service</button>
                               
                            </form>
                        </div>
         </div>
        </div>
    );
};

export default AddServices;