import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import "@/index.css";
import { ThemeProvider } from "./src/context/ThemeContext";

createInertiaApp({
    strictMode: true,
    title: (title) => `${title} - Web-App`,

    resolve: (name) =>
        resolvePageComponent(
            `./src/${name}.jsx`,
            import.meta.glob("./src/**/*.jsx"),
        ),

    setup({ el, App, props }) {
        createRoot(el).render(
            <ThemeProvider>
                <App {...props} />
            </ThemeProvider>,
        );
    },
});
