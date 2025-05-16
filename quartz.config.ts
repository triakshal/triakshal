import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🍀 Triaksha's Notes",
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
light: "#f5f9f5",       // Soft green-tinged white (background)
    lightgray: "#c8d5c8",   // Muted sage (borders)
    gray: "#7a997a",        // Medium green (graph links, borders)
    darkgray: "#2a3a2a",    // Dark forest (body text)
    dark: "#1a3a1a",        // Deep green (headers, icons)
    secondary: "#4a724a",   // Forest links / active nodes
    tertiary: "#5a855a",    // Hover states, visited nodes
    highlight: "#e0efe0",   // Pale green (highlights, code)
    textHighlight: "#d4e6d4", // Lighter highlight (markdown)
        },
        darkMode: {
    light: "#141414",       // Rich dark grey (background)
    lightgray: "#2d382d",   // Dark grey-green (borders)
    gray: "#455445",        // Medium grey-green (graph links)
    darkgray: "#e8f0e8",    // Soft white (body text - brighter for #141414)
    dark: "#b0d0b0",        // Light sage (headers/icons - brighter for contrast)
    secondary: "#689a68",   // Vibrant forest (links/active nodes)
    tertiary: "#78aa78",    // Hover states (slightly brighter)
    highlight: "#1e241e",   // Dark grey-green (highlights)
    textHighlight: "#242e24", // Markdown highlight
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
