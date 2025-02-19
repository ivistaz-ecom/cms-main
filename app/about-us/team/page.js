import AdvisorsTeam from "@/components/AboutUs/AdvisorsTeam/AdvisorsTeam"
import Tab from "@/components/AboutUs/Tab/Tab"
import Team from "@/components/AboutUs/Team/Team"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Seo from "../../../components/Seo/Seo"
import React from "react"

// export function generateMetadata() {
//   return {
//     title: "Our Team | Creating impact collectively",
//     description:
//       "Our team partners with multi-disciplinary teams to tackle challenges and maximise social returns",
//     metadataBase: new URL("https://cms.org.in"),
//     alternates: {
//       canonical: "/about-us/team", // Relative path, resolved against metadataBase
//     },
//     openGraph: {
//       url: "https://cms.org.in/about-us/team",
//       title: "Our Team | Creating impact collectively",
//       description:
//         "Our team partners with multi-disciplinary teams to tackle challenges and maximise social returns",
//       images: [
//         {
//           url: "/social.png",
//           width: 800,
//           height: 600,
//           alt: "CMS",
//         },
//       ],
//     },
//   }
// }

const page = () => {
  const seoField = {
    title: "Our Team | Creating impact collectiviley",
    description:
      "Our team partners with multi-disciplinary teams to tackle challenges and maximise social returns",
    path: "about-us/team",
    metaImage: "/social.png",
    pageType: "WebSite",
  }
  const desc =
    "Our team consists of dedicated mentors, impact specialists, and business experts. Meet the dedicated team at CMS, blending deep industry knowledge with a relentless pursuit of positive social change."
  return (
    <>
      <Seo {...seoField} />
      <div className="bg-[url('/banner/banner02.png')] flex flex-col justify-center md:justify-end h-[420px] md:h-[480px] w-full bg-center bg-cover py-10 md:py-16">
        <Header />
        <div className="ps-2 md:ps-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center sm:text-left">
            Our Team
          </h1>
        </div>
      </div>

      <Tab heading="Change Makers in Action" desc={desc} />

      <div>
        <div className="max-w-screen-xl mx-auto">
          <Team />
        </div>
      </div>

      <div className="mb-10">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between md:my-5 px-5 md:px-0">
          <div className="flex flex-col gap-5 mb-5 lg:mb-0">
            <h1 className="text-[#171717] text-2xl sm:text-3xl md:text-4xl font-semibold">
              Advisors
            </h1>
            <div className="border border-[#707070] w-60" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between px-5 md:px-24">
        <AdvisorsTeam />
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}

export default page
