export default {
  name: "company",
  type: "document",
  title: "Companies",
  fields: [
    {
      name: "companyName",
      type: "string",
      title: "Company Name",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "The front-end will require a slug to be set to be able to show the company's page.",
      options: {
        source: "companyName",
        maxLength: 96,
      },
    },
    {
      name: "companyLogo",
      type: "mainImage",
      title: "Company Logo",
    },
    {
      name: "companyExcerpt",
      type: "text",
      title: "Excerpt",
      description: "This will show up on the company's card on the homepage.",
    },
    {
      name: "companyBody",
      type: "bodyPortableText",
      title: "Body",
      description: "Content typed here is displayed on the company's page.",
    },
    {
      name: "categories",
      type: "array",
      title: "Categories",
      of: [
        {
          type: "reference",
          to: {
            type: "category",
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "companyName",
      media: "companyLogo",
      subtitle: "companyExcerpt",
    },
  },
};
