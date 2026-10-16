
import React from "react";
import Link from "next/link";
import {
  IconShieldCheck,
  IconTruck,
  IconHeadset,
  IconLeaf,
  IconPackages,
  IconTag,
  IconUsers,
  IconArrowRight,
  IconHome,
} from "@tabler/icons-react";

const AboutPage = () => {
  const benefits = [
    {
      title: "Quality Products",
      desc: "Explore construction and home improvement materials for your needs.",
      icon: <IconShieldCheck size={28} className="text-[#FA5C0E]" />,
    },
    {
      title: "Reliable Delivery",
      desc: "Find the products you need for your next home improvement project.",
      icon: <IconTruck size={28} className="text-emerald-600" />,
    },
    {
      title: "Expert Support",
      desc: "Get help finding suitable products for your requirements.",
      icon: <IconHeadset size={28} className="text-red-500" />,
    },
    {
      title: "Better Choices",
      desc: "Discover practical materials for your home and building needs.",
      icon: <IconLeaf size={28} className="text-emerald-600" />,
    },
  ];

  const features = [
    {
      title: "Wide Product Range",
      desc: "Explore wood, plywood, lighting, tiles, bathware and more.",
      icon: <IconPackages size={32} />,
    },
    {
      title: "Competitive Prices",
      desc: "Discover options that suit your needs and budget.",
      icon: <IconTag size={32} />,
    },
    {
      title: "Customer First",
      desc: "We aim to make your product shopping experience simple.",
      icon: <IconUsers size={32} />,
    },
    {
      title: "Quality Focused",
      desc: "Find materials suited to your home and construction projects.",
      icon: <IconShieldCheck size={32} />,
    },
  ];

  return (
    <main className="w-full overflow-hidden bg-white">

      {/* HEADER / HERO SECTION */}
      <section
        className="bg-[url('/aboutus.png')] relative h-[190px] w-full overflow-hidden bg-cover bg-center bg-no-repeat sm:h-[220px] md:h-[240px] lg:h-[250px] "
       
      >
        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent" />

        {/* Header Content */}
        <div className="relative z-10 flex h-full w-full flex-col justify-center px-4 py-3 sm:px-6 md:w-[58%] md:px-8 lg:px-10">

          <div className="mb-1 flex items-center gap-3">
            <h3 className="font-['Poppins'] text-sm font-semibold text-orange-600 sm:text-base">
              About Us
            </h3>
            <span className="h-[2px] w-10 bg-[#FA5C0E]" />
          </div>

          <h1 className="font-['Poppins'] text-2xl font-bold leading-tight text-black sm:text-3xl md:text-3xl lg:text-4xl">
            Building Better Homes, Together
          </h1>

          <p className="mt-2 max-w-lg font-['Inter'] text-xs font-normal leading-relaxed text-gray-800 sm:text-sm md:text-sm lg:text-base">
            At Vrindavan Home, we believe every home deserves quality
            materials. Discover construction and home improvement products,
            backed by helpful support for your needs.
          </p>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section className="w-full px-4 py-6 sm:px-6 md:py-8 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-5 md:grid-cols-2 lg:grid-cols-[1.05fr_1fr_0.8fr] lg:gap-6">

          {/* Story Image */}
          <div className="relative w-full min-w-0">
            <img
              src="/about-story.png"
              alt="Construction materials and home improvement products"
              className="h-[220px] w-full rounded-md object-cover sm:h-[280px] lg:h-[290px]"
            />

            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-3 rounded-md bg-[#0D2447]/95 p-3 text-white">
              <IconHome size={34} stroke={1.7} />

              <div>
                <h3 className="font-['Poppins'] text-sm font-semibold">
                  Your Home, Our Priority
                </h3>
                <p className="font-['Inter'] text-xs text-gray-200">
                  Products for your projects
                </p>
              </div>
            </div>
          </div>

          {/* Story Text */}
          <div className="flex min-w-0 flex-col items-start justify-center">
            <div className="mb-1 flex items-center gap-3">
              <span className="font-['Poppins'] text-sm font-semibold uppercase text-orange-600">
                Our Story
              </span>
              <span className="h-[2px] w-10 bg-[#FA5C0E]" />
            </div>

            <h2 className="font-['Poppins'] text-2xl font-bold text-black sm:text-3xl">
              Who We Are
            </h2>

            <p className="mt-3 font-['Inter'] text-sm leading-relaxed text-gray-800">
              Vrindavan Home is a construction material and home improvement
              shopping platform designed to make finding products easier
              and more convenient.
            </p>

            <p className="mt-3 font-['Inter'] text-sm leading-relaxed text-gray-800">
              From wood and plywood to lighting, bathware, tiles and paints,
              our goal is to bring a wide range of products together in one
              convenient place.
            </p>

            <p className="mt-3 font-['Inter'] text-sm leading-relaxed text-gray-800">
              We want to help homeowners, builders and professionals find
              suitable materials for their projects.
            </p>

            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 font-['Inter'] text-sm font-semibold text-orange-600 transition hover:text-[#E04F08]"
            >
              Contact Us
              <IconArrowRight size={17} />
            </Link>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 gap-3 rounded-md bg-[#E7F4FD] p-3 sm:grid-cols-2 lg:grid-cols-1 lg:p-4">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-md bg-white p-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-50">
                  {item.icon}
                </div>

                <div className="min-w-0">
                  <h3 className="font-['Poppins'] text-sm font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-['Inter'] text-xs leading-relaxed text-gray-800">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="w-full bg-[#E7F4FD] px-4 py-8 sm:px-6 md:py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <div className="mb-1 flex items-center justify-center gap-3">
              <span className="font-['Poppins'] text-sm font-semibold uppercase text-orange-600">
                Why Choose Us
              </span>
              <span className="h-[2px] w-10 bg-[#FA5C0E]" />
            </div>

            <h2 className="font-['Poppins'] text-2xl font-bold text-black sm:text-3xl">
              More Than Just Materials
            </h2>

            <p className="mx-auto mt-2 max-w-2xl font-['Inter'] text-sm leading-relaxed text-gray-800">
              We want to make your construction and home improvement
              shopping experience convenient and straightforward.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center rounded-md border border-slate-200 bg-white p-5 text-center transition-shadow duration-200 hover:shadow-md"
              >
                <div className="mb-3 text-[#FA5C0E]">
                  {item.icon}
                </div>

                <h3 className="font-['Poppins'] text-base font-semibold text-black">
                  {item.title}
                </h3>

                <p className="mt-2 font-['Inter'] text-sm leading-relaxed text-gray-800">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BOTTOM CTA SECTION */}
      <section className="w-full px-4 py-6 sm:px-6 md:py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 rounded-md bg-[#0D2447] p-5 text-white sm:p-6 md:flex-row md:items-center">

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30">
              <IconHome size={27} stroke={1.7} />
            </div>

            <div>
              <h2 className="font-['Poppins'] text-xl font-bold sm:text-2xl">
                Let’s Build Something Great
              </h2>

              <p className="mt-1 font-['Inter'] text-sm leading-relaxed text-gray-200">
                Find the right products for your next project.
              </p>
            </div>
          </div>

          <Link
            href="/home"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FA5C0E] px-5 py-2.5 font-['Inter'] text-sm font-semibold text-white transition hover:bg-[#E04F08]"
          >
            Shop Now
            <IconArrowRight size={17} />
          </Link>

        </div>
      </section>

    </main>
  );
};

export default AboutPage;
