import { FieldValue } from './FieldValue';

export interface CatalogTaskResponse {
    description: FieldValue;
    number: FieldValue;
    opened_at: FieldValue;
    short_description: FieldValue;
    state: FieldValue;
    sys_id: FieldValue;
    assigned_to: FieldValue;
    priority: FieldValue;
    request_item: FieldValue;
}

export interface UserResponse {
    user_sys_id: string;
}
