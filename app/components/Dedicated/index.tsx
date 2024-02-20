import Image from "next/image";

const Dedicated = () => {
    return (
        <div className="relative">

            <Image src="/images/dedicated/spiral.svg" height={272} width={686} alt="spiral-design" className="absolute left-0 hidden lg:block -z-10" />

            <div className='mx-auto max-w-7xl px-4 my-40 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}
                    <div>
                        {/* <Image src="/images/dedicated/man.svg" alt="man-icon" width={416} height={530} className="mx-auto md:mx-0" /> */}
                        <Image src="/images/dedicated/Justin Tan Cropped.jpg" alt="man-icon" width={416} height={530} className="mx-auto md:mx-0 rounded-3xl" />
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative">
                        <Image src="images/dedicated/comma.svg" alt="comma-image" width={200} height={106} className="absolute comma-pos hidden lg:block" />
                        <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">Committed to the Beat: Our Educational Mission</h2>
                        <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">Empowering through beatbox education, our dedicated approach fosters creativity and confidence, guiding students on an inspiring journey of rhythmic self-discovery</p>
                        <p className="text-2xl font-semibold mt-12 lg:ml-32 preline text-center lg:text-start"> Justin Tan, Director</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dedicated;
