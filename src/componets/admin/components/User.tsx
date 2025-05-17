import Pagination from '@/componets/elements/Pagination';
import React, { ReactNode, useEffect, useState } from 'react'

interface Subscription {
    subscriptionEndDate: any;
    scansUsed: ReactNode;
    plan: ReactNode;
    subscriptionStartDate: string;
    lastScanDate: string;
}

interface CabBooking {
    updatedAt: any;
    subscription: Subscription;
    isActive: ReactNode;
    createdAt: ReactNode;
    postcode: ReactNode;
    phone: ReactNode;
    ls: ReactNode;
    fs: ReactNode;
    drop: ReactNode;
    pic: ReactNode;
    fullname: ReactNode;
    email: ReactNode;
    phoneno: ReactNode;
    id: number;
}

const User = () => {
    const [user, setUser] = useState<CabBooking[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // console.log(user, 'user');

    useEffect(() => {
        const fetchCabBookings = async () => {
            const token = localStorage.getItem("token");
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}v1/user/all?page=${currentPage}&limit=12`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await res.json();

                setUser(data.data);
                setTotalPages(data.totalPages || 1);
            } catch (err) {
                console.error('Error fetching cab bookings:', err);
            }
        };

        fetchCabBookings();
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }).format(date);
    };

    return (
        <>
            <section className="box-section block-content-tourlist background-body">
                <div className="container">
                    <div className="box-content-main pt-20">
                        <div className="content-right">
                            <div className="box-grid-tours wow fadeIn">
                                <div className="row">
                                    {user.map((sub, index) => (
                                        <div key={index} className="col-lg-4 col-md-6">
                                            <div className="card-journey-small background-card hover-up">
                                                <div className="card-info p-3 pt-30 border-top">
                                                    <div className="author-info">
                                                        <p className="text-lg-bold">{sub.fs} {sub.ls}</p>
                                                        <p className="text-sm-medium neutral-500">{typeof sub.createdAt === 'string' ? formatDate(sub.createdAt) : 'Invalid Date'}</p>
                                                    </div>
                                                    <div className="card-program border-top">
                                                        <div className="box-info-contact">
                                                            <p className="text-md-medium mobile-phone neutral-1000"><span className="text-md-bold">Mobile:</span> {sub.phone}</p>
                                                            <p className="text-md-medium email neutral-1000"><span className="text-md-bold">Email:</span> {sub.email}</p>
                                                            <p className="text-md-medium whatsapp neutral-1000"><span className="text-md-bold">Post Code:</span> {sub.postcode}</p>
                                                        </div>
                                                        <label className="bg-2 rounded-12 position-absolute top-0 end-0 translate-middle-y px-3 py-2 me-4 text-sm-bold">Plan Details</label>
                                                        <div className="endtime pt-3 mt-3 border-top">
                                                            <p className="text-sm-medium neutral-500">Active: <span style={{ color: '#08750f' }}>{typeof sub.subscription.subscriptionStartDate === 'string' ? formatDate(sub.subscription.subscriptionStartDate) : 'Invalid Date'}</span></p>
                                                            <div className="card-price">
                                                                <span className="post-time neutral-1000">{sub.subscription.scansUsed} Time</span>
                                                            </div>
                                                        </div>
                                                        <div className="endtime">
                                                            <div className="card-price">
                                                                <p className="text-sm-medium neutral-500">Expire: <span style={{ color: '#6e1107' }}>{typeof sub.subscription.subscriptionEndDate === 'string' ? formatDate(sub.subscription.subscriptionEndDate) : 'Invalid Date'}</span></p>
                                                            </div>
                                                            <div className="card-button"><span className="btn btn-gray" >{sub.subscription.plan}</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <Pagination
                                    handleNextPage={handleNextPage}
                                    handlePreviousPage={handlePreviousPage}
                                    totalPages={totalPages}
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default User;
