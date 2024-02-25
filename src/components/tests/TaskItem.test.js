import { fireEvent, render, screen, within } from '@testing-library/react';

import TaskItem from 'components/TaskItem';

const testTask = {
  id: 7357,
  description: 'This is a test task.',
  completed: false
};

const defaultProps = {
  task: testTask,
  onDeleteTask: jest.fn(),
  onToggleTask: jest.fn()
};

const setup = props => render(<TaskItem {...defaultProps} {...props} />);

describe('<TaskItem />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    setup();

    const listItem = screen.getByRole('listitem');
    const deleteButton = within(listItem).getByRole('button');

    expect(listItem.textContent).toContain(testTask.description);
    expect(listItem.classList).toContain('list-group-item');
    expect(deleteButton.textContent).toBe('Delete');
  });

  it('should call onToggleTask when task is clicked', () => {
    setup();

    const listItemSpan = screen.getByText(testTask.description);
    fireEvent.click(listItemSpan);
    expect(defaultProps.onToggleTask).toHaveBeenNthCalledWith(1, testTask.id);
  });

  it('should call onDeleteTask when deleteButton is clicked', () => {
    setup();

    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);
    expect(defaultProps.onDeleteTask).toHaveBeenNthCalledWith(1, testTask.id);
  });
});
