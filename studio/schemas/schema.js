// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// document schemas
import footer from "./documents/footer";
import nav from "./documents/nav";
import author from "./documents/author";
import category from "./documents/category";
import post from "./documents/post";
import siteSettings from "./documents/siteSettings";
import singletonHomepage from "./documents/singletonHomepage";
import company from "./documents/company";
import singletonAbout from "./documents/singletonAbout";
import singletonCompanies from "./documents/singletonCompanies";

// Object types
import socialItem from "./objects/socialItem";
import link from "./objects/link";
import navItem from "./objects/navItem";
import companyLinks from "./objects/companyLinks";
import bodyPortableText from "./objects/bodyPortableText";
import bioPortableText from "./objects/bioPortableText";
import excerptPortableText from "./objects/excerptPortableText";
import mainImage from "./objects/mainImage";
import authorReference from "./objects/authorReference";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "blog",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    footer,
    socialItem,
    link,
    navItem,
    nav,
    companyLinks,
    company,
    singletonHomepage,
    singletonAbout,
    singletonCompanies,
    siteSettings,
    post,
    category,
    author,
    mainImage,
    authorReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
