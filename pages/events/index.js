import Layout from "@/components/Layout";
import Link from "next/link";

export default function EventsPage(){
    return(
        <Layout>
            <h1>My Events</h1>
            <Link href={'events/add'}>Add events</Link>
        </Layout>
    )
}