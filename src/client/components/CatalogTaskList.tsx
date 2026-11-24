import { useEffect, useState } from "react"
import { CatalogTaskResponse } from '../types/catalogTask';
import { CatalogTaskService } from '../services/CatalogTaskService';
import { RequestedItemService } from "../services/RequestedItemService";

const service = new CatalogTaskService();
const ritmService = new RequestedItemService();

interface CatalogTaskListProps {
    selectedTask: CatalogTaskResponse | null;
    onSelectTask: (task: CatalogTaskResponse) => void
}

const CatalogTaskList = ({
    selectedTask,
    onSelectTask
}: CatalogTaskListProps) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [taskList, setTaskList] = useState<CatalogTaskResponse[]>([])

    useEffect(() => {
        let isActive = true
        const fetchTasks = async () => {
            try {
                const tasks = await service.getMyCatalogTasks();
                if (isActive) setTaskList(tasks);
            } catch (error) {
                if (isActive) setError(error instanceof Error ? error.message : 'Unknown Error')
            } finally {
                if (isActive) setLoading(false);
            }
        }

        fetchTasks();

        return () => {
            isActive = false;
        }
    }, []);

    if (error) return (<div>Unable to load catalog tasks.</div>);

    return (
        <>
            { loading ? <div>Loading catalog tasks...</div> :
                taskList.length === 0 ? 
                    <div className="no-tasks">No catalog tasks assigned to you</div> : 
                    taskList.map((task) => {
                        return (<button key={task.sys_id.value} className={selectedTask?.sys_id === task.sys_id ? 'selected-task' : ''} onClick={() => {
                            onSelectTask(task);
                        }}>
                        <span>{task.number.display_value}</span>
                        <span>{task.short_description.display_value}</span>
                        <span>{task.assigned_to.display_value}</span>
                        <span>{task.priority.display_value}</span>
                        <span>{task.state.display_value}</span>
                        </button>)
                    })
            }
        </>
    )
}

export default CatalogTaskList;
