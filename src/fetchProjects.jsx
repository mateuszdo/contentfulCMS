import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
    space: '9x5gw0yklkz5',
    environment: 'master',
    accessToken: 'BirQYY5pGbYqo-qOICq-hNz1t86BIVh5IR90XJPstkU'
})

const useFetchProjects = () => {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    const getData = async() => {
        try {
            const response = await client.getEntries({ content_type: 'projects' });
            const projects = response.items.map((project) => {
                //console.log(project);
            const title = project.fields.title;
            const id =  project.sys.id;
            const url =  project.fields.url;
            const img =  project.fields.image?.fields?.file?.url;
            return {title, id, url, img};
            });
            setProjects(projects);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    },[]);

    return {loading, projects};
}
export default useFetchProjects;