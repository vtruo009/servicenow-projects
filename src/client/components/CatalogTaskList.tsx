import { useEffect, useState } from "react"
import { CatalogTaskResponse } from '../types/catalogTask';
import { CatalogTaskService } from '../services/catalogTaskService';

const service = new CatalogTaskService();

const CatalogTaskList = () => {
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
                        return (<div key={task.sys_id.value}>
                        <p>{task.number.display_value}</p>
                        <p>{task.short_description.display_value}</p>
                        <p>{task.assigned_to.display_value}</p>
                        <p>{task.priority.display_value}</p>
                        <p>{task.state.display_value}</p>
                        </div>)
                    })
            }
        </>
    )
}

export default CatalogTaskList;
