import {CatalogTaskResponse, UserResponse} from '../types/catalogTask'

declare global {
    interface Window {
        g_ck: string
    }
}

export class CatalogTaskService {
    private readonly tableName: string

    constructor() {
        this.tableName = 'sc_task'
    }

    // Return all Catalog Tasks assigned to me
    async getMyCatalogTasks(): Promise<CatalogTaskResponse[]> {
        try {
            const userRes = await fetch('/api/now/ui/user/current_user', {
                headers: {
                    Accept: 'application/json',
                    'X-UserToken': window.g_ck
                }
            });

            if (!userRes.ok) {
                const errorData = await userRes.json();
                throw new Error(errorData.error?.message || `HTTP error ${userRes.status}`)
            }

            const {result: userData}: {result: UserResponse} = await userRes.json();
            const searchParams = new URLSearchParams();
            searchParams.set('sysparm_display_value', 'all');
            searchParams.set('sysparm_fields', 'sys_id,number,short_description,description,state,priority,assigned_to,opened_at');
            searchParams.set('sysparm_query', `assigned_to=${userData.user_sys_id}`);

            const response = await fetch(`/api/now/table/${this.tableName}?${searchParams.toString()}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'X-UserToken': window.g_ck,
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error?.message || `HTTP error ${response.status}`);
            }

            const { result }: {result: CatalogTaskResponse[]} = await response.json();
            return result || []
        } catch (error) {
            console.error('Error fetching tasks', error);
            throw error;
        }
    }
}
