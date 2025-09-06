export type Artwork = {
  id: string;
  title: string;
  description: string;
  series: string;
  imageUrl: string;
};

export const artworks: Artwork[] = [
  {
    id: "p-ros-01",
    title: "A Dance",
    description: "A couple dances in the twilight, their forms blurred in motion.",
    series: "People",
    imageUrl: "/art/People/IMG_1083.jpg",
  },
  {
    id: "p-ros-02",
    title: "Red Dress",
    description: "Her red dress flows as she moves with grace and confidence.",
    series: "People",
    imageUrl: "/art/People/IMG_1084.jpg",
  },
  {
    id: "25554234-ros-045",
    title: "Red Dress",
    description: "Her red dress flows as she moves with grace and confidence.",
    series: "Sketches",
    imageUrl: "/art/Sketches/IMG_1094.jpg",
  },
  {
    id: "p-ros-03",
    title: "Red Dress",
    description: "Her red dress flows as she moves with grace and confidence.",
    series: "People",
    imageUrl: "/art/People/IMG_1085.jpg",
  },
  {
    id: "p-ros-04",
    title: "Red Dress",
    description: "Her red dress flows as she moves with grace and confidence.",
    series: "People",
    imageUrl: "/art/People/IMG_1086.jpg",
  },
  {
    id: "x-ros-04",
    title: "Red Dress",
    description: "Her red dress flows as she moves with grace and confidence.",
    series: "Blue",
    imageUrl: "/art/Blue/IMG_1088.jpg",
  },
  {
    id: "25554234-ros-04",
    title: "Red Dress",
    description: "Her red dress flows as she moves with grace and confidence.",
    series: "Sketches",
    imageUrl: "/art/Sketches/IMG_1091.jpg",
  },
  {
    id: "3-ros-04",
    title: "Red Dress",
    description: "Her red dress flows as she moves with grace and confidence.",
    series: "Blue",
    imageUrl: "/art/Blue/IMG_1090.jpg",
  },
  {
    id: "234-ros-04",
    title: "Red Dress",
    description: "Her red dress flows as she moves with grace and confidence.",
    series: "Blue",
    imageUrl: "/art/Blue/IMG_1089.jpg",
  },
  {
    id: "234234-ros-04",
    title: "Red Dress",
    description: "Her red dress flows as she moves with grace and confidence.",
    series: "Abstract",
    imageUrl: "/art/Abstract/IMG_1087.jpg",
  },
  {
    id: "25554234-ros-034",
    title: "Red Dress",
    description: "Her red dress flows as she moves with grace and confidence.",
    series: "Sketches",
    imageUrl: "/art/Sketches/IMG_1092.jpg",
  },

];

export const seriesList = Array.from(new Set(artworks.map(a => a.series)))
  .sort()
  .map(name => ({ name, slug: name.toLowerCase() }));
