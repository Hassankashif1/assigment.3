import Image from "next/image";
import Header from "./components/header";
import po from "../images/po1.png";
import poo from "../images/po2.png";
import Link from "next/link";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Header></Header>

      {/* Hero Section Start */}

      <div className="hero">
        <h1 className="text-white absolute top-44 left-11 font-bold text-5xl">
          I'm Hassan
        </h1>

        <h3 className="text-white absolute top-64 left-12  text-base w-1/2">
          Hello, I epitomize the essence of innovation, seamlessly weaving
          together code, design <br />
          ,and visionary solutions for the present and future. Our dynamic
          methodologies evolve <br /> in tandem with the industry, yet our
          steadfast commitment to excellence remains unwavering.
        </h3>
      </div>

      {/* Hero Section End */}

      {/* About  Section Start */}

      <div className="bg-slate-900 h-96 " id="about">
        {" "}
        <br />
        <div className="bg-slate-800 h-3/4 w-10/12 rounded-xl ml-24 mt-6 border-double border-8 border-white">
          <h1 className="text-white ml-24 text-3xl font-extrabold">
            {" "}
            <br /> Introduction My-Self
          </h1>{" "}
          <br />
          <p className="w-3/4 ml-24">
            Hello <br />
            I'm Hassan, a 17-year-old aspiring software engineer and a
            pre-engineering student in 12th grade. I've successfully complete my
            first semester in Artificial Intelligence with dedication and
            enthusiasm, during which I learn HTML, CSS and Typescript. I've
            created this Portfolio to showcase my skills and projects.
          </p>
        </div>
      </div>

      {/* About Section End */}

      {/* Portfolio Section Start */}

      <section className="bg-gray-700 h-fit" id="portfolio">
        {" "}
        <br /> <br /> <br />
        <h1 className="text-center text-4xl font-extrabold text-black">
          My Portfolio
        </h1>
        <br /> <br /> <br />
        <div className=" ml-36">
          <Image
            src={po}
            alt=""
            className="w-72 h-2/5 border-solid border-4 border-black ml-28 inline-block"
          />
          <Image
            src={poo}
            alt=""
            className="w-96 h-1/3 border-solid border-4 border-black ml-44 inline-block"
          />
        </div>{" "}
        <br /> <br />
        <div>
          {" "}
          <Link href="https://pospaperhassan.netlify.app/" target="_blank" >
            <button className="h-11 w-32 rounded-xl bg-white font-semibold text-gray-700 ml-80">
              Wants to Visit
            </button>
          </Link>
          <Link href="https://hassank1.netlify.app/" target="_blank">
            <button className="h-11 w-32 rounded-xl bg-white font-semibold text-gray-700 ml-96">
              Wants to Visit
            </button>
          </Link>
        
        </div>{" "}
        <br /> <br />
      </section>

      {/* Portfolio Section End */}


<Footer></Footer>

    </div>
  );
}
