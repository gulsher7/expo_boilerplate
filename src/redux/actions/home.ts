import {
    HOME
} from "@/config/urls";
import { apiGet } from "@/utils/utils";

export function getHomeData(query = "") {
    return apiGet(HOME + query);
}

