import { FieldValue } from "./FieldValue";

export interface RequestedItemResponse {
    sys_id: FieldValue;
    number: FieldValue;
    short_description: FieldValue;
    cat_item: FieldValue;
    requested_for: FieldValue;
    state: FieldValue;
}
