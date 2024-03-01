import { extendTheme } from "@chakra-ui/react";

// Extend the default Chakra UI theme
const Theme = extendTheme({
  // Define custom colors
  colors: {
    primary: {
      100: "rgb(84, 152, 161)", // Light shade of primary color
      200: "rgb(5, 97, 97)", // Darker shade of primary color
      300: '#D70040',
      400: "#A17272", // Darker shade of primary color
    },
    secondary: {
      300: "#FFFFFF", // Light shade of secondary color (white)
      400: "#000000", // Dark shade of secondary color (black)
      500: "#E39A9C",
    },
  },
  // Define custom fonts
  fonts: {
    fonts: {
      logoFont: "La Belle Aurore", // Custom font for logos
      welcomeFont: "Alegreya", // Custom font for welcome messages
      pages: "PlayFair Display", // Custom font for pages
      embraceText: "Crimson Text", // Custom font for text sections
      explore: "Lato", // Custom font for exploration sections
      italian: "Italianno",
      Kota: "Kotta One",
      Jua: "Jua",
    },
  },
});

export default Theme;
