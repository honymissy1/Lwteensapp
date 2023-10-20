
import React, {useState} from 'react';
import { IonDatetime, IonDatetimeButton, IonModal,  } from '@ionic/react';
import { Input, Row, Col, Select, Button, Modal, DatePicker, TimePicker } from 'antd';
const { TextArea } = Input;
import type { Dayjs } from 'dayjs';
import watch from '../assets/images/watch.png'

const AddTodo = () =>{

    type TodoItem = {
        todoContent: string;
        importance: string;
        completed: boolean;
      };

      
    const [value, setValue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [todo, setTodo] = useState<TodoItem[]>([]);
    const [importance, setImportance] = useState('')

    const handleImportance = (e: any) =>{
      setImportance(e) 
    }

    const handleSubmit = () =>{
        setTodo([...todo, {
            todoContent: value,
            importance: importance,
            completed: false
            
        }]);
        console.log(todo);
        
    }




    let presentDate = new Date;    
    return(
        <>
         <Row gutter={[20, 0]} align={'middle'} justify={'space-between'}>
            <Col flex="auto">
             <TextArea
                    required
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="I want to...."
                    autoSize={{ minRows: 2 }}
                />
            </Col>
         </Row>

         <Row justify={'space-between'} gutter={[10,0]} style={{marginTop: '15px'}}>
            <Col flex={'50%'}>
                <Select
                    placeholder="Priority"
                    style={{ width: '100%' }}
                    defaultValue={'Important'}
                    onSelect={handleImportance}
                    options={[
                        { value: 'highly', label: 'Highly Important' },
                        { value: 'important', label: 'Important' },
                        { value: 'less', label: 'Less Import' },
                        { value: 'not', label: 'Not Important'},
                    ]}
                    />
            
            </Col>
            <Col flex={'50%'}>
             <Button onClick={handleSubmit} style={{width: '100%'}} type={'primary'}> + Add</Button>
            </Col>
         </Row>    
        </>
    )
}

export default AddTodo;