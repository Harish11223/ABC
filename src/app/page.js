"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Stack } from "@mui/material";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import { Chip } from "@mui/material";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";

const FavTopics = [
  { index: "01", title: "Entrepreneurship", count: 126 },
  { index: "02", title: "Wellness", count: 24 },
  { index: "03", title: "Food & Beverage", count: 65 },
  { index: "04", title: "Sustainability", count: 75 },
];

export default function Page() {
  return (
    <>
      <Navbar />

      <div className="bg-gray-100 flex flex-col justify-center max-w-[80%] mx-auto">
        <div className="p-1 md:px-7 md:py-3 max-w-[1300px] mx-auto">
          <div className="flex p-4 mx-10 mb-0 gap-5 items-center">
            <span className="bg-yellow-400 text-2xl md:text-5xl font-bold text-black rounded-tl-full rounded-tr-full rounded-bl-full p-7">
              Improve your English level
            </span>

            <p className="mt-4 text-sm text-gray-700 text-left items-center">
              We have published more than{" "}
              <span className="text-[#4335A7] font-bold">650 episodes</span> of
              <br /> educational material, every day more than{" "}
              <span className="text-[#4335A7] font-bold">
                1.2k <br /> teachers work on our materials
              </span>
            </p>
          </div>

          <div className="flex">
            <div className="w-[20%] flex flex-col-reverse">
              <Card
                sx={{
                  maxWidth: 250,
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#f3e8ff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  margin: "4px",
                  padding: "5px",
                }}
              >
                {/* Left side: Image */}
                <CardMedia
                  sx={{
                    width: 80,
                    height: 120,
                    borderRadius: "12px",
                    margin: "6px",
                  }}
                  image="/images/dalle.png"
                  title="green iguana"
                />

                {/* Right side: Text and button */}
                <div
                  style={{ flex: 1, padding: "2px", marginTop: "10px" }}
                  className="flex"
                >
                  <CardContent sx={{ padding: 0 }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        color: "#4335A7",
                        marginBottom: "2px",
                        marginLeft: "10px",
                      }}
                    >
                      Blog
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#4335A7",
                        marginBottom: "2px",
                        marginLeft: "10px",
                        fontSize: "12px",
                      }}
                    >
                      More than 500 articles on educational topics
                    </Typography>
                    <div className="flex">
                      <a
                        href="#"
                        className="text-sm font-bold text-purple-600 rounded-full px-2 flex items-center space-x-2 hover:text-purple-900"
                      >
                        <span className="">View All</span>
                        <i className="fa-solid fa-circle-arrow-right text-purple-800"></i>
                      </a>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>

            <div class="w-[80%] col-span-2 grid grid-rows-2 space-x-2">
              <div className="col-span-2 flex justify-end p-2 mx-10">
                <span className="bg-orange-600 text-5xl font-bold text-black rounded-tl-full rounded-tr-full rounded-br-full p-7">
                  Train with Native speakers
                </span>
              </div>
              <div className="flex mt-5 gap-10 justify-center items-center">
                <div className="">
                  <span className="bg-blue-700 text-5xl font-bold text-white rounded-tl-full rounded-tr-full rounded-bl-full px-10 p-4">
                    Get a license and teach
                  </span>
                </div>
                <div className="">
                  <a
                    href="#"
                    className="bg-purple-300 text-xl font-bold text-black rounded-3xl p-7 flex items-center hover:text-purple-900"
                  >
                    <span>Let's Go</span>
                    <i className="fa-solid fa-circle-arrow-right text-purple-800"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-8">
          <span className="items-center justify-center text-md">
            Experience top-notch English language with passionate teachers,
            interactive
            <br />
            lessons, and modern facilities at our school. Empower skills for
            personal
            <br />
            and professional success.
          </span>
          <span className="items-center justify-center text-md">
            Experience top-notch English language with passionate teachers,
            interactive
            <br />
            lessons, and modern facilities at our school. Empower skills for
            personal
            <br />
            and professional success.
          </span>
        </div>

        <div className="flex justify-center items-center">
          <form className="flex border-2 border-gray-300 rounded-full overflow-hidden w-1/2 max-w-lg">
            <input
              type="text"
              placeholder="Your Email"
              className="px-4 py-2 w-full border-none focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#4335A7] hover:bg-[#3a2a88] w-1/2 text-white transition duration-200 rounded-full"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>

      {/* Our Content section */}

      <div className="p-1 bg-gray-100 flex flex-col gap-2 justify-center items-center">
        <div className="w-[90%]">
          <div className="flex items-center justify-center p-4 bg-gray-100 mt-12 mb-4">
            <span className="bg-purple-300 text-5xl font-bold text-black rounded-tl-full rounded-tr-full rounded-bl-full px-12 p-4">
              Our Content
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="bg-white grid grid-flow-col rounded-full p-2">
              <div>
                <Stack direction="row" spacing={1}>
                  <span className="px-6 rounded-full text-[#200c66] border-[1px] border-[#200c66] flex justify-center items-center">
                    Popular
                  </span>
                  <span className="rounded-full bg-[#200c66] text-white p-1 flex justify-center items-center">
                    <ArrowDownwardIcon />
                  </span>
                </Stack>
              </div>
              <div className="flex flex-col items-center">
                <div>
                  <p>Podcast</p>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="h-[15px] w-[15px] rounded-full bg-[#200c66]"></span>
                  <span className="h-[15px] w-[15px] rounded-full bg-purple-300"></span>
                </div>
              </div>
              <div className="justify-items-end">
                <Stack direction="row" spacing={1}>
                  <span className="rounded-full bg-[#200c66] text-white p-1 flex justify-center items-center">
                    <ArrowForwardIcon />
                  </span>
                  <span className="px-6 rounded-full text-[#200c66] border-[1px] border-[#200c66] flex justify-center items-center">
                    Popular
                  </span>
                </Stack>
              </div>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col bg-white p-5 rounded-xl">
              <div className="flex flex-row mb-4">
                <div className="w-2/3 flex flex-col gap-2 p-5">
                  <p className="text-4xl font-bold text-[#200c66]">
                    Get Started your day with us
                  </p>
                  <p className="text-4xl font-bold text-end text-[#200c66]">
                    Podcasts on any topic
                  </p>
                </div>
                <div className="w-1/3 p-5 flex justify-center items-center">
                  <p className="text-sm">
                    The school mission is to empower students with the language
                    skills they need for personal and professional success.
                  </p>
                </div>
              </div>

              <div className="grid grid-flow-row md:grid-flow-col gap-5">
                <div>
                  <div className="w-full mx-3 flex-shrink-0 bg-gray-100 rounded-lg shadow-md hover:bg-gray-400 hover:text-white transition-colors duration-700 ease-in-out">
                    <div className="p-4 h-60 rounded-lg">
                      <Image
                        src="/images/dalle.png"
                        alt="image here"
                        className="sm:w-[65%] mx-auto mb-4 rounded-lg"
                        objectFit="cover"
                        width= {500}
                        height= {500}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold my-2">
                        Habit of Speaking
                      </h3>
                      <p className="text-sm">
                        The habitual use of descriptive language while speaking is commonly referred to as 
                        "descriptive speech". This communication...
                      </p>
                      <button className="w-full my-5 p-2 hover:bg-[#200c66] text-center border-2 border-[#200c66] rounded-full">
                        Go to Podcast
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="w-full mx-3 flex-shrink-0 bg-purple-300 rounded-xl shadow-md hover:bg-gray-400 hover:text-white transition-colors duration-700 ease-in-out">
                    <div className="p-4 h-60">
                      <h3 className="text-2xl font-semibold my-2">
                        Start your day
                      </h3>
                      <h4 className="text-xl font-semibold my-2 text-[#200c66]">
                        With us
                      </h4>
                      <div className="p-4 flex justify-center items-center">
                        <div className="p-1 rounded-full bg-white text-black flex">
                          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                          <p className="text-xs align-bottom px-3">
                            Run in English
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold my-2">
                        Run and Talk
                      </h3>
                      <p className="text-sm">
                        Running and talking simultaneously can be challenging, but with practice, it's possible 
                        to do both effectively. Here are some tips...
                      </p>
                      <button className="w-full my-5 p-2 hover:bg-[#200c66] text-center border-2 border-[#200c66] rounded-full">
                        Go to Podcast
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="w-full p-5 bg-gray-100 rounded-xl">
                    <h3 className="text-xl font-semibold my-2">
                      The Lighthouse
                    </h3>
                    <h4 className="text-xl font-semibold my-2 text-[#200c66]">
                      Conversation
                    </h4>
                    <p className="text-sm">
                      The group approached the lighthouse, marvelling at it's beauty and history. As they climbed the winding
                      staircase, they couldn't help but feel a sense of awe and reverence.
                    </p>
                    <div className="w-full my-5 p-2 grid grid-flow-col">
                      <div>
                        <button className="text-[#200c66] text-xs">
                          Read more
                        </button>
                      </div>
                      <div className="flex justify-end">
                        <span className="rounded-full cursor-pointer bg-[#200c66] text-white p-1 flex">
                          <ArrowForwardIcon />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full p-5 bg-gray-100 rounded-xl">
                    <div className="w-full my-5 p-2 grid grid-flow-col">
                      <div>
                        <button className="text-[#200c66] text-xs">
                          <span className="rounded-full cursor-pointer text-[#200c66] border-2 border-[#200c66] p-1 flex">
                            <HeadphonesOutlinedIcon />
                          </span>
                        </button>
                      </div>
                      <div className="flex justify-end">
                        <span className="rounded-full cursor-pointer bg-[#200c66] text-white p-1 flex">
                          <ArrowForwardIcon />
                        </span>
                      </div>
                    </div>
                    <p className="text-sm">
                      Our podcasts can inspire you not only to speak English but also to think in it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Section 2 ends */}
          </div>
        </div>
      </div>

      {/* Our favourite topics section */}

      <div className="p-1 bg-gray-100 flex flex-col gap-2 justify-center items-center pb-14">
        <div className="flex items-center justify-center p-4 bg-gray-100 mt-12">
          <span className="bg-purple-300 text-5xl font-bold text-black rounded-tl-full rounded-tr-full rounded-br-full px-12 p-4">
            Our favourite topics
          </span>
        </div>

        <div className="w-[90%] px-10">
          {FavTopics.map((topic) => (
            <div
              key={topic.index}
              className="w-full grid grid-flow-col py-5 hover:px-14 border-b-2 border-gray-500 text-gray-500 hover:text-[#200c66]"
            >
              <div>
                <Stack
                  direction="row"
                  spacing={1}
                  className="flex items-center gap-2"
                >
                  <Chip label={topic.index} variant="outlined" />
                  <p className="text-4xl font-bold">{topic.title}</p>
                </Stack>
              </div>
              <div className="text-[#200c66] flex justify-end">
                <Stack
                  direction="row"
                  spacing={1}
                  className="flex items-center gap-2"
                >
                  <p className="text-sm">{topic.count + " "}Podsacts</p>
                  <WidgetsRoundedIcon />
                </Stack>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* They talk about us section */}
      <div className="flex items-center justify-center p-4 bg-gray-100">
        <span className="bg-purple-300 text-5xl font-bold text-black rounded-tl-full rounded-tr-full rounded-bl-full px-12 p-4">
          They talk About Us
        </span>
      </div>

      <div className="flex items-center justify-center bg-gray-100 mb-8">
        {/* Single Card */}
        <div className="bg-white shadow-lg rounded-3xl p-3 max-w-md my-4">
          {/* Right Aligned Section */}
          <div className="flex justify-end ps-8">
            <div className="flex items-center justify-center p-4 mb-0">
              <span className="bg-gray-100 font-sans text-md text-black rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl px-5 p-4">
                As a recent graduate of this English language school, I can
                confidently say that it has exceeded my expectations. The
                teachers are not only knowledgeable and passionate about
                teaching but also go above and beyond to ensure that each
                student receives personalized attention.
              </span>
            </div>
          </div>

          {/* Left Aligned Section */}
          <div className="flex justify-start pe-8">
            <div className="flex items-center justify-center p-4 -my-4 mb-0">
              <span className="font-sans bg-gray-100 text-md text-black rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl px-5 p-4">
                As a satisfied student, I highly recommend this English language
                school. The teachers are exceptional, providing personalized
                attention and a challenging curriculum focused on practical
                communication skills. The facilities are modern and comfortable,
                making learning enjoyable.
              </span>
            </div>
          </div>
          <div className="text-center">
            <button
              type="button"
              className="text-white bg-[#4335A7] hover:bg-[#3a2a88] focus:outline-none focus:ring-4 focus:ring-[#4335A7] font-medium rounded-full text-sm px-12 py-2 text-center me-2 mb-2 dark:bg-[#4335A7] dark:hover:bg-[#3a2a88] dark:focus:ring-[#4335A7]"
            >
              View all Reviews
            </button>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-2xl max-w-md w-full my-4 mx-3 p-8 py-20">
          <span className="text-md text-purple-800 font-bold text-8xl">
            200K+
          </span>
          <br />
          <span className="text-md  font-bold text-4xl rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl">
            Reviews
          </span>
          <br />
          <span className="text-md text-black rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl">
            The English language school has received overwhelmingly{" "}
            <span className="text-[#4335A7] font-bold">positive reviews</span>
            from its students. Many has praised the school's experiences and
            knowlefgeable teachers, who are able to cater to the
            <span className="text-[#4335A7] font-bold">
              {" "}
              individual need of each student.
            </span>
          </span>
        </div>
      </div>

      {/* Prices section */}

      <div className="flex items-center justify-center p-4 bg-gray-100">
        <span className="bg-purple-300 text-5xl font-bold text-black rounded-tl-full rounded-tr-full rounded-br-full px-12 p-4">
          Prices
        </span>
      </div>

      <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-2 px-8 mb-12 max-w-[90%] mx-auto">
        <div class="col-span-2 p-2">
          <div className="w-full p-5 bg-white rounded-2xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">
                  Get a{" "}
                  <span className="text-[#4335A7] font-bold">License</span> and
                </h1>
                <h4 className="text-3xl font-bold mb-2">become a teacher</h4>
              </div>
              <span className="rounded-full cursor-pointer bg-purple-800 text-white p-2 flex">
                <ArrowForwardIcon />
              </span>
            </div>

            <p className="text-sm mt-4">
              The cost of obtaining an English teacher license can vary
              depending on the program and location. Some programs may require
              fees for application, examination, and materials, while others may
              offer more affordable options.
            </p>

            <div className="w-full p-2 grid grid-flow-col">
              <div className="flex justify-end"></div>
            </div>
          </div>
        </div>

        <div class="">
          <div className="flex justify-center items-center bg-gray-100">
            <div className="grid grid-cols-2 rounded-xl">
              {/* Image 1 */}
              <div className="relative h-24 rounded-lg overflow-hidden m-2">
                <Image
                  src="/images/dalle.png"
                  alt="Image 1"
                  // layout="fill"
                  objectFit="cover"
                  width= {500}
                  height= {500}
                />
              </div>
              {/* Image 2 */}
              <div className="relative h-24 rounded-lg overflow-hidden m-2">
                <Image
                  src="/images/dalle.png"
                  alt="Image 2"
                  // layout="fill"
                  objectFit="cover"
                  width= {500}
                  height= {500}
                />
              </div>
              {/* Image 3 */}
              <div className="relative h-24 rounded-lg overflow-hidden m-2">
                <Image
                  src="/images/dalle.png"
                  alt="Image 3"
                  // layout="fill"
                  objectFit="cover"
                  width= {500}
                  height= {500}
                />
              </div>
              {/* Image 4 */}
              <div className="relative h-24 rounded-lg overflow-hidden m-2">
                <Image
                  src="/images/dalle.png"
                  alt="Image 4"
                  // layout="fill"
                  objectFit="cover"
                  width= {500}
                  height= {500}
                />
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <div className="flex justify-center items-center bg-gray-100">
            <div className="grid grid-cols-2 rounded-xl">
              {/* Image 1 */}
              <div className="relative h-24 rounded-lg overflow-hidden m-2">
                <Image
                  src="/images/dalle.png"
                  alt="Image 1"
                  // layout="fill"
                  objectFit="cover"
                  width= {500}
                  height= {500}
                />
              </div>
              {/* Image 2 */}
              <div className="relative h-24 rounded-lg overflow-hidden m-2">
                <Image
                  src="/images/dalle.png"
                  alt="Image 2"
                  // layout="fill"
                  objectFit="cover"
                  width= {500}
                  height= {500}
                />
              </div>
              {/* Image 3 */}
              <div className="relative h-24 rounded-lg overflow-hidden m-2">
                <Image
                  src="/images/dalle.png"
                  alt="Image 3"
                  // layout="fill"
                  objectFit="cover"
                  width= {500}
                  height= {500}
                />
              </div>
              {/* Image 4 */}
              <div className="relative h-24 rounded-lg overflow-hidden m-2">
                <Image
                  src="/images/dalle.png"
                  alt="Image 4"
                  // layout="fill"
                  objectFit="cover"
                  width= {500}
                  height= {500}
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-2">
          <div class="col-span-2 p-1">
            <div className="w-full p-8 bg-white rounded-2xl shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold">Learn English and Pass</h1>
                  <h4 className="text-3xl font-bold text-[#4335A7]">
                    international exams
                  </h4>
                </div>
                <span className="rounded-full cursor-pointer bg-purple-800 text-white p-2 flex">
                  <ArrowForwardIcon />
                </span>
              </div>

              <p className="text-sm mt-4">
                The cost English language courses can vary based on factorss
                such as the course length, level, and location. Some courses may
                offer flexible payment plans or discounts for group
              </p>

              <div className="w-full p-2 grid grid-flow-col">
                <div className="flex justify-end"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
