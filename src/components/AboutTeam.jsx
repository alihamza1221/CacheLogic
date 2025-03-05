import Link from "next/link";
import Image from "next/image";
const AboutTeam = () => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-16 py-24 max-w-[90%]  mx-auto">
        <div className="flex flex-col gap-8 items-center">
          <Image
            src={"/aboutTeam/team_btn.png"}
            width={100}
            height={28}
            alt="team"
            className=" mx-auto"
          />
          {/* How does Cache Logic stands out? */}
          <p className="font-semibold text-[28px] leading-[34px] tracking-[-0.02em] sm:text-[36px] sm:leading-[44px]">
            Meet Our Team
          </p>
          <p className="leading-7 text-center max-w-2xl">
            Our philosophy is simple — hire a team of diverse, passionate people
            and foster a culture that empowers you to do your best work.
          </p>
          <div className="btns flex gap-3 lg:justify-start items-center w-[90%] lg:w-1/2 justify-center ">
            <Link href="#team" className="cursor-pointer">
              <Image
                src={"/aboutTeam/read_btn.png"}
                width={178}
                height={48}
                alt="team"
              />
            </Link>
            <Link href="#team" className="cursor-pointer">
              <Image
                src={"/aboutTeam/hiring_btn.png"}
                width={129}
                height={48}
                alt="team"
              />
            </Link>
          </div>
        </div>
        {/* Team Grid */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full ">
          <div className="w-full max-w-[700px] max-h-[744px] overflow-hidden rounded-l-xl relative">
            <Image
              src="/aboutTeam/m1.png"
              alt="Image1"
              width={802}
              height={744}
              className="cover"
            />
            {/* Overlay container */}
            <div
              className="absolute bg-white/30 w-[95%] h-[214px] bottom-4 ml-[2.5%] rounded-2xl"
              style={{ backdropFilter: "blur(24px)" }}
            ></div>
            {/* content to show behind the blur */}
            <div className="absolute  bottom-4 text-white z-10 w-[95%] ml-[2.5%] h-[214px] py-6 px-5 rounded-2xl">
              <Link href={"#"} className="absolute top-1 right-1">
                <Image
                  src="/aboutTeam/arrow_up.png"
                  alt="Image2"
                  width={24}
                  height={30}
                  className="cover"
                />
              </Link>
              <div className="flex flex-col gap-4">
                {" "}
                <h3 className="font-semibold  text-2xl md:text-[30px] leading-[30px] tracking-normal">
                  Faizan Ahmad
                </h3>
                <div className="about_founder">
                  <span className=" text-lg font-semibold">Founder & CEO</span>
                  <p className=" text-base text-center lg:text-start font-normal">
                    Former co-founder of Opendoor. Early staff at Apple and
                    Google.
                  </p>
                </div>
                <div className="socials flex justify-start items-center gap-5">
                  <Link href={"#"}>
                    <Image
                      src="/aboutTeam/x.png"
                      alt="Image2"
                      width={23}
                      height={22}
                      className="cover"
                    />
                  </Link>
                  <Link href={"#"}>
                    <Image
                      src="/aboutTeam/linkedin.png"
                      alt="Image2"
                      width={23}
                      height={22}
                      className="cover"
                    />
                  </Link>
                  <Link href={"#"}>
                    <Image
                      src="/aboutTeam/browser.png"
                      alt="Image2"
                      width={23}
                      height={22}
                      className="cover"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* --------------- */}
          </div>
          <div className="flex  md:flex-col justify-between overflow-hidden rounded-r-xl gap-6">
            <div className="relative max-w-[390px] max-h-[360px] overflow-hidden">
              <Image
                src="/aboutTeam/m2.png"
                alt="Image2"
                width={390}
                height={360}
                className="cover"
              />

              {/* Overlay container */}
              <div
                className="absolute bg-white/30 w-[95%] h-[130px] bottom-4 ml-[2.5%] rounded-2xl"
                style={{ backdropFilter: "blur(24px)" }}
              ></div>
              {/* content to show behind the blur */}
              <div className="absolute  bottom-4 text-white z-10 w-[95%] ml-[2.5%] h-[130px] py-6 px-5 rounded-2xl">
                <Link href={"#"} className="absolute top-1 right-1">
                  <Image
                    src="/aboutTeam/arrow_up.png"
                    alt="Image2"
                    width={24}
                    height={30}
                    className="cover"
                  />
                </Link>
                <div className="flex flex-col gap-4">
                  {" "}
                  <h3 className="font-semibold  text-2xl md:text-[30px] leading-[30px] tracking-normal">
                    Abdullah Sarfaraz
                  </h3>
                  <div className="about_founder">
                    <span className=" text-lg font-semibold">Co-Founder</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative max-w-[390px] max-h-[360px]  ">
              <Image
                src="/aboutTeam/m3.png"
                alt="Image3"
                width={390}
                height={360}
                className="cover"
              />

              {/* Overlay container */}
              <div
                className="absolute bg-white/30 w-[95%] h-[130px] bottom-4 ml-[2.5%] rounded-2xl"
                style={{ backdropFilter: "blur(24px)" }}
              ></div>
              {/* content to show behind the blur */}
              <div className="absolute  bottom-4 text-white z-10 w-[95%] ml-[2.5%] h-[130px] py-6 px-5 rounded-2xl">
                <Link href={"#"} className="absolute top-1 right-1">
                  <Image
                    src="/aboutTeam/arrow_up.png"
                    alt="Image2"
                    width={24}
                    height={30}
                    className="cover"
                  />
                </Link>
                <div className="flex flex-col gap-4">
                  {" "}
                  <h3 className="font-semibold  text-2xl md:text-[30px] leading-[30px] tracking-normal">
                    Annie Stanley
                  </h3>
                  <div className="about_founder">
                    <span className=" text-lg font-semibold">
                      Product Manager
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
