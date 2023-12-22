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
      stat: {
        populate: {
          fields: ["title","align","image"],
          image: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      info: {
        populate: {
          fields: ["title","image","align"],
          image: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      new: {
        populate: {
          fields: ["title", "description", "date","url", "color", "image"],
          image: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      team: {
        populate: {
          fields: ["name", "position", "image"],
          image: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      partner: {
        populate: {
          fields: ["image","link"],
          image: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      dispicture: {
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
      component: {
        populate: {
          fields: ["name","image"],
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
    fields: ["metaTitle", "metaDescription","metaRobots"],
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
