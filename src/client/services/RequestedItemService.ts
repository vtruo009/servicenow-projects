import { RequestedItemResponse } from '../types/requestedItem';

declare global {
    interface Window {
        g_ck: string
    }
}

export class RequestedItemService {
    private readonly tableName: string

    constructor() {
        this.tableName = 'sc_req_item';
    }

    async getRITM(ritmID: string): Promise<RequestedItemResponse> {
        try {
            const searchParams = new URLSearchParams();
            searchParams.set('sysparm_display_value', 'all');
            searchParams.set('sysparm_fields', 'sys_id,number,short_description,requested_for,state,cat_item');

            const ritmRes = await fetch(`/api/now/table/${this.tableName}/${encodeURIComponent(ritmID)}?${searchParams.toString()}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'X-UserToken': window.g_ck,
                }
            });

            if (!ritmRes.ok) {
                const errorData = await ritmRes.json();
                throw new Error(errorData.error?.message || `HTTP error ${ritmRes.status}`)
            }

            const { result }: { result: RequestedItemResponse } = await ritmRes.json();
            return result;
        } catch (e) {
            console.error('Error fetching RITM', e);
            throw e;
        }
    }
}
