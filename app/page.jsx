"use client";
import React from "react";
import ReactFlow, { ReactFlowProvider, Background, Panel, useReactFlow, Controls, MiniMap } from "reactflow";
import { shallow } from "zustand/shallow";
import { useStore } from "./store.js";
import Osc from "./nodes/Osc";
import Amp from "./nodes/Amp";
import Out from "./nodes/Out";
import Question from "./nodes/question.jsx";

import "reactflow/dist/style.css";

const nodeTypes = {
    osc: Osc,
    amp: Amp,
    out: Out,
    question: Question,
};

const selector = (store) => ({
    nodes: store.nodes,
    edges: store.edges,
    onNodesChange: store.onNodesChange,
    onNodesDelete: store.onNodesDelete,
    onEdgesChange: store.onEdgesChange,
    onEdgesDelete: store.onEdgesDelete,
    addEdge: store.addEdge,
    addOsc: () => store.createNode("osc"),
    addAmp: () => store.createNode("amp"),
    addQuestion: () => store.createNode("question"),
});

export default function Home() {
    const store = useStore(selector, shallow);
    return (
        <ReactFlowProvider>
            <div class="flex flex-row">
                <div className="basis-9/12 h-screen">
                    <ReactFlow
                        nodeTypes={nodeTypes}
                        nodes={store.nodes}
                        edges={store.edges}
                        onNodesChange={store.onNodesChange}
                        onNodesDelete={store.onNodesDelete}
                        onEdgesChange={store.onEdgesChange}
                        onEdgesDelete={store.onEdgesDelete}
                        onConnect={store.addEdge}
                        fitView
                    >
                        <Background />
                        <Controls />
                        <MiniMap />
                    </ReactFlow>
                </div>
                <div className="basis-3/12 h-screen">
                    <button className="rounded bg-white shadow" onClick={store.addOsc}>
                        Add Osc
                    </button>
                    <button className="rounded bg-white shadow" onClick={store.addAmp}>
                        Add Amp
                    </button>
                    <button className="rounded bg-white shadow" onClick={store.addQuestion}>
                        Add Frage
                    </button>
                </div>
            </div>
        </ReactFlowProvider>
    );
}
