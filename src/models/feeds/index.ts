import { FeedsModel, FeedsResponse } from './index.d';
import { FeedsPayload } from '../../controllers/feeds/index.d';
import axios from "axios";
import Converter from '../../utils/converter';

class Feeds implements FeedsModel {
    public findAll(payload: FeedsPayload): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            axios
                .get("https://www.flickr.com/services/feeds/photos_public.gne", {
                    params: {
                        format: "json",
                        lang: "en-us",
                        nojsoncallback: 1,
                        tags: payload.tags,
                    },
                })
                .then(({ data, status }: any) => {
                    if (status == 200) {
                        data.modified = Converter.convertDate(data.modified)
                        data.items.map((e: FeedsResponse) => {
                            e.description = e
                                .description.split("</p>", 3)
                                .map((e: string) => e.replace(" <p>", ""))
                            e.published = Converter.convertDate(e.published)
                            e.date_taken = Converter.convertDate(e.date_taken)
                            e.tags = e.tags ? e.tags.split(" ") : null
                        })
                        resolve(data)
                    } else {
                        reject(data)
                    }
                })
                .catch((e: any) => {
                    reject(e)
                });

        })
    }
}

export default Feeds