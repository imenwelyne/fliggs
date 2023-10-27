"use strict";

/**
 * `page-populate-middleware` middleware
 */

const populate = {
  contentSections: {
    populate: {
      picture: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      buttons: {
        populate: true,
      },
      feature: {
        populate: {
          fields: ["title", "description", "showLink", "newTab", "url", "text"],
          media: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      number: {
        populate: {
          fields: ["title", "description","image","align"],
          image: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      new: {
        populate: {
          fields: ["title", "description", "date", "color", "image"],
          image: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      team: {
        populate: {
          fields: ["name", "position", "align","image"],
          image: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      partner: {
        populate: {
          fields: ["image"],
          image: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      engagement: {
        populate: {
          fields: ["label","url","image"],
          image: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      testimonials: {
        populate: {
          picture: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      plans: {
        populate: ["product_features"],
      },
      submitButton: {
        populate: true,
      },
    },
  },
  seo: {
    fields: ["metaTitle", "metaDescription"],
    populate: { shareImage: true },
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query = {
      populate,
      filters: { slug: ctx.query.filters.slug },
      locale: ctx.query.locale,
    };

    console.log("page-populate-middleware.js: ctx.query = ", ctx.query);

    await next();
  };
};
