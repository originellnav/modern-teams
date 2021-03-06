import S from "@sanity/desk-tool/structure-builder";
import {
  FcHome,
  FcBusinessman,
  FcAcceptDatabase,
  FcParallelTasks,
  FcSettings,
  FcList,
  FcSignature,
  FcLink,
  FcCollaboration,
} from "react-icons/fc";
import EyeIcon from "part:@sanity/base/eye-icon";
import EditIcon from "part:@sanity/base/edit-icon";
import IframePreview from "../previews/IframePreview";

// Web preview configuration
const remoteURL = "https://preview-modernteams.gtsb.io";
const localURL = "http://localhost:8000";
const previewURL =
  window.location.hostname === "localhost" ? localURL : remoteURL;

export const getDefaultDocumentNode = (props) => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const { schemaType } = props;
  if (schemaType == "company") {
    return S.document().views([
      S.view.form().icon(EditIcon),
      S.view
        .component(IframePreview)
        .title("Web Preview")
        .icon(EyeIcon)
        .options({ previewURL }),
    ]);
  }
  return S.document().views([S.view.form()]);
};

/**
 * This defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Homepage")
        .icon(FcHome)
        .child(
          S.editor()
            .id("home")
            .schemaType("home")
            .documentId("singletonHomepage")
        ),
      S.listItem()
        .title("Companies Page")
        .icon(FcCollaboration)
        .child(
          S.editor()
            .id("companies")
            .schemaType("companies")
            .documentId("singletonCompanies")
        ),
      S.listItem()
        .title("About Page")
        .icon(FcBusinessman)
        .child(
          S.editor()
            .id("about")
            .schemaType("about")
            .documentId("singletonAbout")
        ),
      S.listItem()
        .title("Company Entries")
        .icon(FcAcceptDatabase)
        .schemaType("company")
        .child(S.documentTypeList("company").title("Company Entries")),
      S.listItem()
        .title("Footer")
        .icon(FcParallelTasks)
        .child(
          S.editor().id("footer").schemaType("footer").documentId("footer")
        ),
      S.divider(),
      S.listItem()
        .title("Categories")
        .icon(FcList)
        .schemaType("category")
        .child(S.documentTypeList("category").title("Categories")),
      S.listItem()
        .title("Authors")
        .icon(FcSignature)
        .schemaType("author")
        .child(S.documentTypeList("author").title("Authors")),
      S.listItem()
        .title("Navigation")
        .icon(FcLink)
        .schemaType("nav")
        .child(S.documentTypeList("nav").title("Navigation Schemas")),
      S.divider(),
      S.listItem()
        .title("Settings")
        .icon(FcSettings)
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      // `S.documentTypeListItems()` returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above.
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "footer",
            "nav",
            "category",
            "author",
            "post",
            "siteSettings",
            "home",
            "companies",
            "about",
            "company",
          ].includes(listItem.getId())
      ),
    ]);
