import { Component, createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import {Modal} from '../Modal';
import {Input} from '../Input';
import { FoodProps } from '../../../types';

interface ModalEditFoodProps {
  handleUpdateFood: (food: FoodProps)=>void;
  setIsOpen: ()=>void;
  isOpen: boolean;
  editingFood: FoodProps;

}

export function ModalEditFood({handleUpdateFood, setIsOpen, isOpen, editingFood}: ModalEditFoodProps) {
  const formRef = createRef()
  

  async function handleSubmit(data: FoodProps) {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef as any} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
