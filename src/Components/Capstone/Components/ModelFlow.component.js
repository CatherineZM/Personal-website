import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'reactflow/dist/style.css';
import ReactFlow from 'reactflow';

const nodes = [
    { 
        id: '1',
        position: { x: 0, y: 200 },
        data: { label: 'User Input' },
        sourcePosition: 'right',
        type: 'input',
        draggable: false,
    },
    { 
        id: '2',
        position: { x: 200, y: 145 },
        data: { label: 'Convert To Word Vectors' },
        sourcePosition: 'right',
        targetPosition: 'left',
        draggable: false,
        style:{ backgroundColor: 'rgba(187, 222, 251)', width: 200, height: 150 },
    },
    { 
        id: '2a',
        position: { x: 50, y: 30 }, 
        data: { label: 'Embeddings' },
        parentNode: '2',
        extent: 'parent',
        draggable: false,
        style:{ width: 100, height: 40 },
    },
    { 
        id: '2b',
        position: { x: 50, y: 90 }, 
        data: { label: 'Tokenizer' },
        parentNode: '2',
        extent: 'parent',
        draggable: false,
        style:{ width: 100, height: 40 },
    },
    { 
        id: '3', 
        position: { x: 450, y: 90 },
        data: { label: 'Models' },
        sourcePosition: 'right',
        targetPosition: 'left',
        draggable: false,
        style:{ backgroundColor: 'rgba(187, 222, 251)', width: 250, height: 350 },
    },
    { 
        id: '3a', 
        position: { x: 30, y: 30 }, 
        data: { label: 'Model for Achievement' },
        parentNode: '3',
        extent: 'parent',
        draggable: false,
        style:{ backgroundColor: 'rgba(100, 181, 246, 0.4)', width: 200, height: 130 },
    },
    { 
        id: '3a1', 
        position: { x: 25, y: 30 }, 
        data: { label: 'GPT2' },
        parentNode: '3a',
        extent: 'parent',
        draggable: false,
        style:{ width: 150, height: 35 },
    },
    { 
        id: '3a2', 
        position: { x: 25, y: 80 }, 
        data: { label: 'CNN Classifier' },
        parentNode: '3a',
        extent: 'parent',
        draggable: false,
        style:{ width: 150, height: 35 },
    },
    { 
        id: '3b', 
        position: { x: 30, y: 200 }, 
        data: { label: 'Model for Universalism' },
        parentNode: '3',
        extent: 'parent',
        draggable: false,
        style:{ backgroundColor: 'rgba(100, 181, 246, 0.4)', width: 200, height: 130 },
    },
    { 
        id: '3b1', 
        position: { x: 25, y: 30 }, 
        data: { label: 'GPT2' },
        parentNode: '3b',
        extent: 'parent',
        draggable: false,
        style:{ width: 150, height: 35 },
    },
    { 
        id: '3b2', 
        position: { x: 25, y: 80 }, 
        data: { label: 'CNN Classifier' },
        parentNode: '3b',
        extent: 'parent',
        draggable: false,
        style:{ width: 150, height: 35 },
    },
    { 
        id: '4', 
        position: { x: 750, y: 210 }, 
        data: { label: 'Output List Of Values' },
        targetPosition: 'left',
        type: 'output',
        draggable: false,
    },
  ];
  const edges = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e2-3', source: '2', target: '3' },
    { id: 'e3-4', source: '3', target: '4' },
    { id: 'e2a-2b', source: '2a', target: '2b' },
    { id: 'e3a1-3a2', source: '3a1', target: '3a2' },
    { id: 'e3b1-3b2', source: '3b1', target: '3b2' },
    { id: 'e3a-3b', source: '3a', target: '3b', animated: true, label:'Models for other 8 Values'},
  ];


class ModelFlow extends React.Component {
  
    render() {
        return (
            <div style={{ width: '90%', height: '50vh', background: '#ECECEC'}}>
                    <ReactFlow nodes={nodes} edges={edges} fitView attributionPosition="bottom-left" />
            </div>
        )
    }
}

export default ModelFlow;