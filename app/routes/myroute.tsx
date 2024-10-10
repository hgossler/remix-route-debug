import {Link, useLoaderData} from "@remix-run/react";
import {json, MetaFunction} from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "New Remix App - My Route" }
    ];
};

export async function loader() {
    return json({ message: "Hello!" });
}

export default function Route() {
    const data = useLoaderData<typeof loader>();

    console.log(data)

    return (<div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-16">
            <header className="flex flex-col items-center gap-9">
                <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Welcome to <span className="sr-only">Remix</span>
                </h1>
                <div className="h-[144px] w-[434px]">
                    <img
                        src="/logo-light.png"
                        alt="Remix"
                        className="block w-full dark:hidden"
                    />
                    <img
                        src="/logo-dark.png"
                        alt="Remix"
                        className="hidden w-full dark:block"
                    />
                </div>
            </header>
            <nav
                className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200 p-6 dark:border-gray-700">
                <p className="leading-6 text-gray-700 dark:text-gray-200">
                    What&apos;s next?
                </p>
                <ul>
                    <li>
                        <Link to="/"
                              className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500">
                            Go to /</Link>
                    </li>
                    <li>

                    </li>
                </ul>
            </nav>
            <div className="flex flex-col items-center gap-4">

                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{data.message === undefined ? ("Message is undefined. Why did that happen?!") : "Message from server:"}</h2>
                <p className="text-gray-700 dark:text-gray-200">{data.message}</p>
            </div>
        </div>
    </div>)
}