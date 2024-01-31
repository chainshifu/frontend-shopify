import React from "react";
import Heading from "../Product.jsx/Heading";
import Image_1 from "../../assets/images/blog_3.jpg";
import Image_2 from "../../assets/images/blog_1.jpeg";
import Image_3 from "../../assets/images/blog_2.jpg";

const BlogData = [
  {
    id: 1,
    title: "How to choose perfect watch?",
    answer:
      "Choose between a 41mm or 45mm casing size. The 41mm version features a 352 x 420 pixel resolution display and is ideal for more petite wrists (with a diameter between between 5.12 and 7.87 inches). The 45mm version of the watch features 396 x 484 pixel resolution and is better suited to people with a wrist diameter between 5.51 and 9.95 inches. The size casing you choose also impacts the watch's weight, but not its functionality (aside from the slight display size difference).",
    published: "Jan 20, 2024 by Dilshad",
    image: Image_1,
  },
  {
    id: 2,
    title: "How to choose perfect gadget?",
    answer:
      "Apple devices proved fast a long time ago. Many people purchase Apple laptops, tablets, and smartphones because they work uncompromisingly swiftly. In education, quick access to information is imperative, which is why Apple stands out. Students can launch anything in the blink of an eye, be it Zoom, Skype, or any other app.",
    published: "Jan 20, 2024 by Michael Fowler",
    image: Image_2,
  },
  {
    id: 3,
    title: "How to choose perfect VR headset?",
    answer:
      "When you put on the headset, there’s a quick automatic eye adjustment that’s much quicker and more seamless than on something like the Quest Pro there are no manual dials or sliders for eye settings at all. Apple wouldn’t say anything specific about its field of view this long before launch, but I definitely saw black in my peripheral vision. The Vision Pro is not as totally immersive as the marketing videos would have you believe.",
    published: "Jan 20, 2024 by Nilay Patel",
    image: Image_3,
  },
];

function Blogs() {
  return (
    <div className="my-8">
      <div className="container">
        <Heading title="Recent News" subtitle="Explore Our Blogs" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-4 md:gap-6 gap-y-6">
          {BlogData.map((data) => (
            <div key={data.id}>
              <div className="mb-2 overflow-hidden rounded-2xl">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-[230px] rounded-2xl object-cover hover:scale-105 duration-500"
                />
              </div>
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="font-sm line-clamp-4 text-gray-600 dark:text-gray-400">
                  {data.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
