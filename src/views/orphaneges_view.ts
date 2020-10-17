import { Orphanage } from "../models/Orphanage";

import imagesView from "./images_view";

export default {
  render(orphanage: Orphanage) {
    const matchedWhatsapp = orphanage.whatsapp.match(
      /(\d{2})(\d{2})(\d{5})(\d{4})/
    );

    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      whatsapp: `+${matchedWhatsapp?.[1]} ${matchedWhatsapp?.[2]} ${matchedWhatsapp?.[3]}-${matchedWhatsapp?.[4]}`,
      images: imagesView.renderMany(orphanage.images),
    };
  },

  renderMany(orphanages: Orphanage[]) {
    return orphanages.map((orphanage) => this.render(orphanage));
  },
};
