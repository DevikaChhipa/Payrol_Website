import React from 'react';

export default function Feature() {
    return (
        <section
            className="relative bg-white px-20 py-24 pb-14 text-center mx-auto bg-cover bg-center"
            style={{ backgroundImage: "url('/Home/key.webp')" }}
        >
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 heading text-left max-w-6xl">
                <h3 className="bg-[#ecab23] text-white px-3 py-2 rounded-sm text-[13px] w-fit mb-2">
                    Key Features
                </h3>
                <div className="flex gap-28">
                    <p className="text-3xl font-semibold text-white capitalize">
                        Successful Financial Control Process
                    </p>
                    <p className="text-white text-md">
                        Stay organized and focused on growth while we handle your day financial
                        record Gravida urna vehicula volutpat velit sed imperdiet.
                    </p>
                </div>
            </div>
            <section className="px-20 py-16 z-50 relative">
                <div className="max-w-6xl mx-auto flex gap-16 items-center">
                    {/* Left: Steps */}
                    <div className="flex-1 space-y-10">
                        {[
                            { num: '01', title: 'Basic Research', active: true  },
                            { num: '02', title: 'Discovery' },
                            { num: '03', title: 'Build Plan' },
                            { num: '04', title: 'Execute'},
                        ].map((item) => (
                            <div key={item.num} className="flex gap-6">
                                {/* Number + line */}
                                <div className="flex flex-col items-center">
                                    <span
                                        className={`text-xl font-semibold ${item.active ? 'text-[#f5a623]' : 'text-white'
                                            }`}
                                    >
                                        {item.num}
                                    </span>
                                    <span
                                        className={`mt-2 h-16 w-px ${item.active ? 'bg-[#f5a623]' : 'bg-white/20'
                                            }`}
                                    />
                                </div>

                                {/* Text */}
                                <div className='text-left'>
                                    <h3
                                        className={`text-xl font-semibold ${item.active ? 'text-[#f5a623]' : 'text-white'
                                            }`}
                                    >
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-300 max-w-md">
                                        In ligula libero neque neque nulla neque rutrum. Iaculis quam.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Image */}
                    <div className="flex-1">
                        <div className="rounded-lg overflow-hidden shadow-xl">
                            <img
                                src="/Home/key1.webp"
                                alt="Growth chart"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </section>
    );
}
