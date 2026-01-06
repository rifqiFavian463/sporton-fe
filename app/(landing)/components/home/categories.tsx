import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const categoryList = [
  {
    name: "Running",
    imgUrl: "category-running.png",
  },
  {
    name: "Tennis",
    imgUrl: "category-tennis.png",
  },
  {
    name: "Basketball",
    imgUrl: "category-basketball.png",
  },
  {
    name: "Football",
    imgUrl: "category-football.png",
  },
  {
    name: "Badminton",
    imgUrl: "category-badminton.png",
  },
  {
    name: "Swimming",
    imgUrl: "category-swimming.png",
  },
];

const CategoriesSection = () => {
  return (
    <section id="category-section" className="container mx-auto px-5 md:px-0 pb-20">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">Browse By Categories</h2>
        <Link href="#" className="flex gap-2 text-primary font-medium">
          <span className="self-center">See All Categories</span>
          <FiArrowRight className="self-center" />
        </Link>
      </div>
      <div className="mt-5">
        <Carousel>
          <CarouselContent>
            {categoryList.map((category, index) => (
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/6" key={index}>
                <div className="flex flex-col self-center rounded-lg bg-linear-to-r from-[#F1F1F1] to-[#F7F7F7] w-full aspect-square justify-center items-center">
                  <Image src={`/images/categories/${category.imgUrl}`} width={86} height="86" alt={category.name} className="mb-2.5 w-20" />
                  <div className="text-primary font-medium text-xl text-center">{category.name}</div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { CategoriesSection };
