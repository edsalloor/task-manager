import useForm from '../hooks/useForm';

const AddTaskForm = ({ onAddTask }) => {
  const { description, handleInputChange, resetForm } = useForm({
    description: ''
  });

  const onSubmit = event => {
    event.preventDefault();

    if (description.length < 1) {
      return;
    }

    const newTask = {
      id: new Date().getTime(),
      completed: false,
      description
    };

    onAddTask && onAddTask(newTask);
    resetForm();
  };

  return (
    <>
      <h4>Add Task</h4>
      <hr />

      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="What is the task?"
          className="form-control"
          name="description"
          value={ description }
          onChange={ handleInputChange }
        />

        <button
          type="submit"
          className="btn btn-outline-primary mt-3"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default AddTaskForm;
