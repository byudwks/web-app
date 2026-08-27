import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

createInertiaApp({
    strictMode: true,
    title: (title) => `${title} - Web - App`,

    resolve: (name) =>
        resolvePageComponent(
            `./Apps/${name}.jsx`,
            import.meta.glob("./Apps/**/*.jsx"),
        ),

    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
