import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()]
});

namespace React {
	interface divHTMLAttributes<T> {
		isHeld?: boolean;
	}
}
