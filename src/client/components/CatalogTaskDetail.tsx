import { useEffect, useState } from 'react';
import { CatalogTaskResponse } from '../types/catalogTask';
import './CatalogTaskDetail.css'
import { RequestedItemService } from '../services/RequestedItemService';
import { RequestedItemResponse } from '../types/requestedItem';

interface CatalogTaskDetailProps {
    selectedTask: CatalogTaskResponse | null
}

const service = new RequestedItemService();

const CatalogTaskDetail = ({
    selectedTask,
}: CatalogTaskDetailProps) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [relatedRITM, setRelatedRITM] = useState<RequestedItemResponse | null>(null);
    const ritmID = selectedTask?.request_item?.value;

    useEffect(() => {
        let isActive = true;
        setRelatedRITM(null);
        setError('');

        const fetchRITM = async () => {
            if (!ritmID) {
                setLoading(false);
                return;
            }

            setLoading(true);
            try {
                const ritm = await service.getRITM(ritmID);
                if (isActive && ritm) setRelatedRITM(ritm);
            } catch (e) {
                if (isActive) setError(e instanceof Error ? e.message : 'Unknown Error');
            } finally {
                if (isActive) setLoading(false);
            }
        }

        fetchRITM();

        return () => {
            isActive = false;
        }
    }, [ritmID]);

    if (!selectedTask) {
        return (<div>No task selected</div>)
    }

    return (
        <div>
            <h2>Task {selectedTask.number.display_value}</h2>
            <p>{selectedTask.short_description.display_value}</p>
            <p>{selectedTask.description.display_value}</p>
            <h2>RITM Info.</h2>
            {
                loading ? <div role="status">Loading related RITM info.</div> : (
                    error ? <div role="alert">Unable to retrieve related RITM.</div> : (
                        !relatedRITM ? <div>No related RITM for task {selectedTask.number.display_value}</div> :
                            <div>
                                <p>{relatedRITM.number.display_value}</p>
                                <p>{relatedRITM.short_description.display_value}</p>
                                <p>{relatedRITM.requested_for.display_value}</p>
                                <p>{relatedRITM.state.display_value}</p>
                                <p>{relatedRITM.cat_item.display_value}</p>
                            </div>
                    )
                )
            }

        </div>
    )
}

export default CatalogTaskDetail;
