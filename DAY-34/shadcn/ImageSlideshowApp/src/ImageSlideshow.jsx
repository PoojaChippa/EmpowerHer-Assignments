import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const images = [
  "https://i.pinimg.com/474x/ec/a6/da/eca6da2e377514a38db858305a71a8d2.jpg",
  "https://i.pinimg.com/564x/b5/9d/9e/b59d9e9449cb29c2a24fc41643405ab1.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy0U2HMxUZ3bOAsJtcv87iy0MomzrclZDTFw&s",
];

export default function ImageSlideshow() {
  const [index, setIndex] = useState(0);

  return (
    <Card className="w-[400px] text-center">
      <CardHeader>
        <CardTitle>Image Slideshow</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <img src={images[index]} className="mx-auto rounded" />

        <div className="flex justify-between">
          <Button
            onClick={() =>
              setIndex((index + images.length - 1) % images.length)
            }
          >
            Previous
          </Button>
          <Button onClick={() => setIndex((index + 1) % images.length)}>
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
