/* eslint-disable no-unused-vars */
/* eslint-disable import/namespace */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    root: "src"
})