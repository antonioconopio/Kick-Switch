import ShoeCard from "./ShoeCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ShoeCarousel = ({ listings }: { listings: Array<any> }) => {
  return (
    <div className="flex flex-col items-center justify-center m-4 px-10">
      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-full max-w-7xl"
      >
        <CarouselContent className="-ml-1">
          {listings.map((listing) => (
            <CarouselItem
              key={listing.id}
              className="pl-1 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
            >
              <div className="p-1">
                <ShoeCard
                  id={listing.id}
                  name={listing.title}
                  size={listing.size || "N/A"} // Assuming `size` is added to the listings or defaulting to "N/A"
                  image={
                    listing.photos?.length
                      ? JSON.parse(listing.photos[0]).name
                      : "/default-image.jpg" // Fallback image
                  }
                  price={listing.price}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Previous Button */}
        <CarouselPrevious />

        {/* Next Button */}
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ShoeCarousel;
