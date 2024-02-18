"use server";

export default async function fetchData() {
    const res = await fetch("http:localhost:5176/api/planetary-k-3h" /*, { next: { revalidate: 30 } }*/);
    const data = await res.json();

    return data;
}
