import PageRender from "../../../public/components/PageRender";
import { allWeeks } from "../../../public/data/networking";

const Networking = () => {
    return <PageRender title="Networking" weeksFetch={allWeeks} />;
};

export default Networking;
