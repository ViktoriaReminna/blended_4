import { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper, EditButton } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { deleteTodos, updateTodo } from 'redux/todosSliceReducer';

export const Todo = ({ text, counter, id }) => {
  const [inputValue, setInputValue] = useState(text);

  const dispatch = useDispatch();

  const handleUpdateClick = () => {
    dispatch(updateTodo({ id, text: inputValue }));
  };

  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={() => dispatch(deleteTodos(id))}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
        <label>
          Change
          <input
            type="text"
            value={inputValue}
            onChange={({ target }) => setInputValue(target.value)}
          />
        </label>
        <EditButton type="button" onClick={handleUpdateClick}>
          Update
        </EditButton>
      </TodoWrapper>
    </>
  );
};
