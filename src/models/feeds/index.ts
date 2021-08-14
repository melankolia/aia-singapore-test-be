import { FeedsModel } from './index.d';
import axios from "axios";

class Feeds implements FeedsModel {
    public findAll(tags: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            axios
                .get("https://www.flickr.com/services/feeds/photos_public.gne", {
                    params: {
                        format: "json",
                        lang: "en-us",
                        nojsoncallback: 1,
                        tags
                    },
                })
                .then(({ data, status }: any) => {
                    if (status == 200) {
                        resolve(data)
                    } else {
                        reject(data)
                    }
                })
                .catch((e: ErrorEvent) => {
                    reject(e)
                });

        })
    }
}

export default Feeds