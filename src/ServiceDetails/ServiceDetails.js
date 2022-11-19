import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';


const ServiceDetails = () => {
    const { _id, price, title, description, rating, img, reviewer_text,
        reviewer_name, reviewer_img } = useLoaderData();
    
    
    const { user } = useContext(AuthContext);

    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/myReviews'


    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} `;
        const address = ` ${form.address.value}`;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            message,
            address
        }

        fetch('https://y-six-phi.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review Placed Successfully')
                    form.reset();
                }
            })
            .catch(err => console.error(err));
        navigate(from, { replace: true })
    }

    


    return (
        <div>
            <h2 className='text-3xl text-center mt-4'>Welcome to our service details page</h2>
            <h2 className='text-2xl text-center mt-4'>Below You Will Get The Details About This Service.</h2>
            <div className="card lg:card-side bg-base-100 border-2  grid grid-cols-3  gap-4  border-sky-600 shadow-xl m-5">
                <figure>
                    <img src={img} className='h-full' alt="Album" />
                </figure>
                <div className="card-body col-span-2">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p className='mt-5'>Cost of This Service :$ {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Confirm This Service</button>
                    </div>
                </div>
            </div>

            {/* Review Section  */}
            <div className='bg-sky-300 m-6 rounded-lg'>
                <h1 className='text-3xl text-center mt-10 p-3 font-bold text-sky-700'>See What our Reviewers Saying</h1>

                <div className="stats shadow bg-lime-200 h-[200px] w-[97%] m-5 mb-7">

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title text-secondary font-bold text-2xl">Ratings</div>
                        <div className='text-5xl font-bold text-yellow-600'>*****</div>
                        <div className="stat-value text-primary">{rating}</div>
                    </div>

                    <div className="stat">
                        <p className="stat-title text-secondary font-bold text-2xl">Reviewer Feedback</p>
                        <p>This is really a good service</p>
                        <p className="text-violet-600 text-lg">{reviewer_text}</p>
                        <p className="stat-desc font-bold">You Can Choose This Service.</p>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-[135px]  rounded-full">

                                    <img src={reviewer_img} className='mask mask-decagon' alt="" />
                                </div>
                            </div>
                        </div>
                        <p className="stat-title text-secondary font-bold text-2xl">Reviewer Name</p>
                        <div className="stat-title text-primary font-bold text-2xl">Asif Hasan</div>
                        <div className="stat-title text-secondary font-bold text-2xl">{reviewer_name}</div>
                    </div>

                </div>


                {user?.email ?
                    <>
                        <p className='flex justify-center font-bold mb-3'>Now You Can Add Your Review</p>
                        <div className='flex justify-center'>

                            <form onSubmit={handlePlaceReview}>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                    <input name="firstName" type="text" placeholder="Your Name" className="input input-ghost w-full input-bordered" />
                                    <input name="address" type="text" placeholder="Your Address" className="input input-ghost w-full input-bordered" />
                                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full input-bordered" readOnly />
                                </div>
                                <textarea name="message" className="textarea textarea-bordered h-24 w-full mt-3" placeholder="Your review for this Service" required></textarea>

                                <input className='btn mb-4 mt-2' type="submit" value="Add Your Review."></input>

                            </form>
                        </div>
                    </>
                    :
                    <p className='font-bold'>Please login to add a review. <Link className='text-primary' to='/login'>Login</Link></p>
                }





            </div>
        </div>
    );
};

export default ServiceDetails;