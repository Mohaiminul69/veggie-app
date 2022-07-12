import { typography } from "../../Theme/Typography";
import { colors } from "../../Theme/Colors";

const BASE = {
  fontFamily: typography.primary,
  fontSize: 16,
  color: colors.purpleLight,
};

const BASE_BOLD = {
  fontFamily: typography.primaryText,
  fontSize: 16,
  color: colors.indigo,
};

const BOLD = {
  fontWeight: "bold",
  color: colors.indigo,
};

export const presets = {
  default: BASE,
  bold: BOLD,
  h1: {
    ...BOLD,
    fontSize: 34,
    lineHeight: 40,
  },
  h2: {
    ...BOLD,
    fontSize: 30,
  },
  h3: {
    ...BASE_BOLD,
    fontSize: 22,
  },
  h4: {
    ...BASE_BOLD,
    fontSize: 15,
  },
  small: {
    ...BASE,
    fontSize: 17,
    lineHeight: 25,
  },
};
