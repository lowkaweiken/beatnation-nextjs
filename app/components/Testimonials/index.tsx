"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Michael Gabriel Smith",
        profession: '',
        comment: 'My son\'s confidence soared after joining beatbox classes! He now proudly showcases his skills at family gatherings, and his newfound rhythm has had a positive impact on his overall self-esteem. Thank you for nurturing his talent and boosting his confidence!',
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "Harith Ezzalni",
        profession: '',
        comment: 'Taking beatbox classes with Artsy was a game-changer for my daughter. The instructors made learning fun, and now she\'s not just tapping into her musical side but also developing a keen sense of rhythm and creativity. Highly recommended!',
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        name: "Joseph Sim",
        profession: '',
        comment: 'Enrolling in beatbox classes at [Your Company] was the best decision for my son. Not only did he learn the art of beatboxing, but he also developed a strong sense of discipline and focus. The positive atmosphere and expert guidance have truly made a difference in his musical journey.',
        imgSrc: '/images/testimonial/user3.svg',
    },
    {
        name: "Joseph Sim",
        profession: '',
        comment: 'I never thought beatboxing could be so much fun and educational. Beatnation turned my hobby into a skill, and now I\'m impressing my friends with my beats. The classes are engaging, and the instructors are supportive. I\'m hooked!',
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "Umar Faris",
        profession: '',
        comment: 'Being part of Beatnation\'s beatbox classes has been an incredible experience. The classes are well-structured, and the instructors are not only talented but also patient. I\'ve learned so much about rhythm and expression, and it\'s amazing to see how beatboxing has become a joyful part of my daily routine.',
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        name: "Cody Fisher",
        profession: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/testimonial/user3.svg',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="bg-testimonial pt-40 pb-32 lg:py-32" id="testimonial-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">See what others are saying.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">See what others are saying.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">See what others are saying.</h3>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} className="relative">
                                <div className='bg-white test-sha m-3 p-10 my-20 rounded-3xl'>
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={71} height={71} className="inline-block m-auto absolute test-pos" />
                                    <h4 className='text-base font-medium text-testColor my-4'>{items.comment}</h4>
                                    <hr style={{ color: "lightgrey" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-base font-medium pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-xs font-medium  pb-2 opacity-50'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
