
const Beliefs = () => {
    return (
        <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5'>

                {/* COLUMN-1 */}

                <div className="bg-darkblue bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="text-lg font-normal text-blue tracking-widest mb-5 text-center sm:text-start">BOOST CONFIDENCE</h2>
                    <h3 className="text-4xl sm:text-65xl font-bold text-blue leading-snug mb-5 text-center sm:text-start">Building <span className="text-black">Confidence One Beat at a time</span></h3>
                    <h5 className="text-black pt-2 mb-5 text-center sm:text-start">Empower Your Child with the Rhythmic Confidence to Shine in Every Endeavor</h5>
                    {/* <div className="text-center sm:text-start">
                        <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">Get Started</button>
                    </div> */}
                </div>

                {/* COLUMN-2 */}

                <div className="bg-build pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="text-lg font-normal text-blue tracking-widest mb-5 text-center sm:text-start">BRAIN BEATS</h2>
                    <h3 className="text-4xl sm:text-65xl font-bold text-black leading-snug mb-5 text-center sm:text-start"><span className="text-blue">Enhancing</span> Creativity and Cognitive Skills</h3>
                    <h5 className="bluish pt-2 mb-5 text-center sm:text-start">Unleash Your Child\'s Potential: Beatboxing for Enhanced Creativity and Cognitive Growth</h5>
                    {/* <div className="text-center sm:text-start">
                        <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">Learn more</button>
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default Beliefs;
