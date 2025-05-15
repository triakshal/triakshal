import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Triaksha's Notes",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        title: {
          name: "Noto Serif Display SemiBold",},
          //weights: [600], },
        header: {
          name: "Noto Serif",
          weights: [400, 700], },
        body: "Noto Sans",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#e3e8e5",
          lightgray: "#25d0b4",
          gray: "#089b83",
          darkgray: "#18201e",
          dark: "#0eaa4f",
          secondary: "#089b83",
          tertiary: "#25d0b4",
          highlight: "#55ec94",
          textHighlight: "#88f2e0",
        },
        darkMode: {
          light: "#18201e",
          lightgray: "#68736d",
          gray: "#8a9990",
          darkgray: "#e3e8e5",
          dark: "#65e6d1",
          secondary: "#69f7a4",
          tertiary: "#15c15d",
          highlight: "0fbda0",
          textHighlight: "#c7d1cb",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
