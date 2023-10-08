import React from 'react';
import { Handle } from 'reactflow';
import { shallow } from 'zustand/shallow';
import { useStore } from '../store';
import Picture from '../images/wilkommen.jpg'

const selector = (id) => (store) => ({
  setFrequency: (e) => store.updateNode(id, { frequency: +e.target.value }),
  setType: (e) => store.updateNode(id, { type: e.target.value }),
});

export default function Question({ id, data }) {
  const { setFrequency, setType } = useStore(selector(id), shallow);

  return (
    <div className="rounded-md bg-white shadow-xl">
      <p className="rounded-t-md px-2 py-1 bg-pink-500 text-white text-center text-sm">Title</p>

      <label className="flex flex-col px-2 py-1">
        <p className="text-xs font-bold mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        
      </label>

      <hr className="border-gray-200 mx-2" />

      <label className="flex flex-col px-2 pt-1 pb-4">
        <p className="text-xs font-bold mb-2">Waveform</p>
        <select className="nodrag" value={data.type} onChange={setType}>
          <option value="sine">sine</option>
          <option value="triangle">triangle</option>
          <option value="sawtooth">sawtooth</option>
          <option value="square">square</option>
        </select>
      </label>

      <Handle className="w-2 h-2" type="source" position="bottom" />
    </div>
  );
}
