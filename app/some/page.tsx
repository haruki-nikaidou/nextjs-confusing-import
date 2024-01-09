import {getO} from "@/server/o";

export default function Some() {
    return (
        <main>
            <p>
                Call at /some: {getO()}
            </p>
            <p>
                <a href='/'>Call at /</a>
            </p>
        </main>
    )
}