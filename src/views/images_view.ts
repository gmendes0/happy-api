import { Image } from "../models/Image";

export default {
  render(image: Image) {
    return {
      path: `${process.env.IMAGES_BASE_URL}/${image.path}`,
      id: image.id,
    };
  },

  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};
