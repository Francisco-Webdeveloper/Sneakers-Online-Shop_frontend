export interface Sneaker {
  _id: string;
  brand: string;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  stock: number;
  url: {
    image1: string;
    imageThumbnail1: string;
    image2: string;
    imageThumbnail2: string;
    image3?: string;
    imageThumbnail3?: string;
    image4?: string;
    imageThumbnail4?: string;
  };
}
