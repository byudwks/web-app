import { Head } from "@inertiajs/react";

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <div>
                <h1 className="text-2xl font-bold">Hello Laravel 12 + React</h1>
                <p>Laravel berhasil terhubung dengan React melalui Inertia.</p>
            </div>
        </>
    );
}
