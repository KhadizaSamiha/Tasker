import NoTasksFound from "./NoTasksFound";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBoard() {
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-gray-100 px-6 py-8 md:px-9 md:py-16">
          <TaskActions
          // onAddClick={() => setShowAddModal(true)}
          // onDeleteAllClick={handleDeleteAllClick}
          />
          <TaskList
            // tasks={tasks}
            // onEdit={handleEditTask}
            // onDelete={handleDeleteTask}
            // onFav={handleFavorite}
          />
          {/* {
                        tasks.length > 0 ?
                        (<TaskList
                            tasks={tasks}
                            onEdit={handleEditTask}
                            onDelete={handleDeleteTask}
                            onFav={handleFavorite}
                        />) : (<NoTasksFound />)
                    } */}
        </div>
      </div>
    </section>
  );
}
