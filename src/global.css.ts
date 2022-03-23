import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./vars.css";

globalStyle("body, body *", {
  all: "unset",
  boxSizing: "border-box",
  // fontFamily: "Segoe UI",
  fontFamily: vars.fontFamily.body,
  color: vars.color.black,
  // color: "black",
  padding: 0,
  margin: 0,
});
